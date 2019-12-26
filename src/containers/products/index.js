import React, {useReducer} from 'react';
import Product from "../../components/Product";
import {productsReducer} from "./reducer";
import {getFirstProduct, getLastProduct} from "./utils";

export const initialState = {
    products: [],
    lastNo: null,
    firstNo: null,
    loading: false,
};
const Products = ({products}) => {
    const [state, setState] = useReducer(productsReducer, {
        ...initialState,
        products,
        last: getLastProduct(products),
        first: getFirstProduct(products)
    });
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