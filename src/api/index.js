import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const isServer = typeof window === 'undefined';
fetch = isServer ? fetch : axios;
const baseUrl = isServer ? 'https://icecat.biz' : '/api';

export const ApiService = {
    getCategories: () => (get('/rest/main-categories')),
    getAuth: () => (get('/rest/auth')),
    getProducts: () => get('/new-main/get-init-products'),
    getLanguages: () => get('/rest/languages'),
    getTranslations: (params) => post('/rest/translations', params),
    getImage: async (params) => {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        const res = await fetch(baseUrl + '/images.icecat.biz/get_image.cgi?' + query, {
            method: 'GET',
            mode: 'no-cors',
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
            })
        });
        const data = await JSON.stringify(res.body);
        return res
    }
};

async function post(url, params = {}) {
    const config = {
        method: 'POST',
        body: JSON.stringify(params),
    };
    try {
        const res = await fetch(baseUrl + url, config);
        return res;
    } catch (e) {

    }
}

async function get(url, params = {}) {
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
    const config = {
        method: 'GET',
    };
    try {
        const res = await fetch(baseUrl + url + '?' + query, config);
        return res
    } catch (e) {
    }
}
