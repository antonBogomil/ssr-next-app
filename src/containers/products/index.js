/* eslint-disable */
import React, {useReducer, useEffect} from 'react';
import Product from '../../components/Product';
import {productsReducer} from './reducer';
import { getFirstProduct, getLastProduct } from './reducer';

export const initialState = {
    products: [],
    lastNo: null,
    firstNo: null,
    loading: false,
};
const Products = ({products}) => {
    let scrolledHeight = 0;
    const [state, setState] = useReducer(productsReducer, {
        ...initialState,
        products,
        // last: getLastProductTime(products),
        // first: getFirstProductTime(products)
    });
    useEffect(() => {
        console.log(products);

        window.addEventListener('scroll', () => {
            if (window.scrollY > scrolledHeight) {
                scrolledHeight = window.scrollY;
                if (window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight) {
                    console.log('get more');
                }
            } else {
                scrolledHeight = window.scrollY;
                console.log('get fresh');
            }
        })
    }, []);
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <Product key={product.product_id}
                                 product={product}
                        />
                    )
                })
            }

        </>
    );
};

export default Products;