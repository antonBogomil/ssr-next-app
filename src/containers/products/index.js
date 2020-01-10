/* eslint-disable */
import React, {useReducer, useEffect} from 'react';
import Product from '../../components/Product';
import {actionTypes, productsReducer} from './reducer';
import {getFirstProduct, getLastProduct, uniqueProducts} from './utils';
import {ApiService} from "../../api";

export const initialState = {
  products: [],
  lastNo: null,
  firstNo: null,
  loading: false,
};
const Products = ({ products }) => {
  let scrolledHeight = 0;
  const [state, dispatch] = useReducer(productsReducer, {
    ...initialState,
    products,
    lastNo: getLastProduct(products),
    firstNo: getFirstProduct(products)
  });
  const listener = () => {
    if (state.loading === false) {
      if (window.scrollY > scrolledHeight) {
        scrolledHeight = window.scrollY;
        if (window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight) {
          dispatch({
            type: actionTypes.LOADING
          });
          ApiService.getMoreProducts({ time: state.lastNo }).then((res) => {
            const products = res.data.products;
            dispatch({
              type: actionTypes.LOADED_MORE,
              payload: {
                products: uniqueProducts(state.products, products),
                lastNo: getLastProduct(products)
              }
            })
          });
        }
      } else {
        scrolledHeight = window.scrollY;
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [state.loading]);
  return (
      <>
        {
          state.products.map((product) => {
            return (
                <Product key={product.product_id}
                         product={product}
                />
            )
          })
        }
        {
          state.loading && <div>Loading...</div>
        }
      </>
  );
};

export default Products;