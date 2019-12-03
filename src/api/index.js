import fetch from 'isomorphic-unfetch';
const baseUrl = 'https://icecat.biz';
export const ApiService = {
    getCategories: () => (get('/rest/main-categories')),
    getAuth: () => (get('/rest/auth')),
    getProducts: () => get('/new-main/get-init-products'),
    getTranslations: (params)=> post('/rest/translations', params),
    getImage: async (params) => {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        const res = await fetch(baseUrl + '/images.icecat.biz/get_image.cgi?' + query, {
            method: 'GET',
            mode: 'no-cors',
            headers: new Headers({
                'Access-Control-Allow-Origin':'*',
            })
        });
        return res.data
    }


};

async function post(url,params={}){
    const config = {
        method: 'POST',
        body: JSON.stringify(params),
    };
    try {
        const res = await fetch(baseUrl + url,config);
        return await res.json();
    }
    catch (e) {

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
        return await res.json();
    } catch (e) {
    }
}
