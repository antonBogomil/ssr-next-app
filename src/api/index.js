import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const isServer = typeof window === 'undefined';
fetch = isServer ? fetch : axios;
const baseUrl = isServer ? 'https://icecat.biz' : '/api';


async function post(url, params = {}) {
  const config = {
    method: 'POST',
    body: JSON.stringify(params),
  };
  try {
    const res = await fetch(baseUrl + url, config);
    return res;
  } catch (e) {
    return e;
  }
}

async function get(url, params = {}) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  const config = {
    method: 'GET',
  };
  try {
    const res = await fetch(`${baseUrl + url}?${query}`, config);
    return res;
  } catch (e) {
    return e;
  }
}


export const ApiService = {
  getCategories: () => (get('/rest/main-categories')),
  getAuth: () => (get('/rest/auth')),
  getProducts: (params) => get('/new-main/get-products',params),
  getMoreProducts: (params) => get('/new-main/get-products', params),
  getLanguages: () => get('/rest/languages'),
  getTranslations: (params) => post('/rest/translations', params),
  getImage: async (params) => {
    const query = Object.keys(params)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
    const res = await fetch(`${baseUrl}/images.icecat.biz/get_image.cgi?${query}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
      }),
    });
    return res;
  },
};
