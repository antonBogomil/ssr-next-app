import React from 'react';
import styles from '../styles/product.scss';
import {getUpdateTime} from "../helpers";
import ImageLoader from "./ImageLoader";

const icecatBrandSrc = 'https://uk.icecat.biz/themes/transitional/images/placeholder3.jpg';
const Product = ({product}) => {
    const {manufacturer_image, supplier_name, updated, product_picture_id, product_id} = product;
    return (
        <div className={styles.product}>
            <div className={styles.productHeader}>
                <div className={styles.productBrand}>
                    <img src={manufacturer_image || icecatBrandSrc}/>
                    <div>{manufacturer_image && supplier_name}</div>
                </div>
                <div className={styles.productUpdate}>
                    {getUpdateTime(updated)} hours ago
                </div>
            </div>
            <div className={styles.productMain}>
                <div className={styles.productImage}>
                    <ImageLoader gallery={product_picture_id} productId={product_id}/>
                </div>
            </div>
            <div style={styles.productFooter}>

            </div>
        </div>
    );
};
export default Product;



