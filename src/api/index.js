import fetch from 'isomorphic-unfetch';
const baseUrl = 'https://icecat.biz';
export const ApiService = {
    getCategories: get('/rest/main-categories'),
    getAuth: get('/rest/auth'),
    getProducts: get('/new-main/get-init-products'),
    getImage: (params) => {
        get('/images.icecat.biz/get_image.cgi?product_id=3599857&type_image=thumb&product_gallery_id=13816573',{
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            ...params
        })()
    }
};


function get(url, params = {}) {
    return async () => {
        try {
            const res = await fetch(baseUrl + url, {params});
            return await res.json();
        } catch (e) {
            console.log(e);
            return {}
        }
    }
}