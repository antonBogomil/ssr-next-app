import React from 'react';
import styles from '../styles/product.scss';
import {getUpdateTime} from "../helpers";
import ImageLoader from "./ImageLoader";
import Link from "next/link";
const icecatBrandSrc = 'https://uk.icecat.biz/themes/transitional/images/placeholder3.jpg';
const noImageSrc = 'https://uk.icecat.biz/themes/basic/css/imgs/noimage.png';
const Product = ({product}) => {
    const {manufacturer_image, supplier_name, updated, product_picture_id, url,title} = product;
    return (
        <div className={styles.product}>
            <div className={styles.productHeader}>
                <div className={styles.productBrand}>
                    <img src={manufacturer_image || icecatBrandSrc}/>
                    <div>{manufacturer_image && supplier_name}</div>
                </div>
                <div className={styles.productName}>
                    <Link href={url}>
                        {title}
                    </Link>
                </div>
                <div className={styles.productUpdate}>
                    {getUpdateTime(updated)} hours ago
                </div>
            </div>
            <div className={styles.productMain}>
                <div className={styles.productImage}>
                    <img src={noImageSrc} alt={product_picture_id}/>
                    {/*<ImageLoader gallery={product_picture_id} productId={product_id}/>*/}
                </div>
            </div>
            <div style={styles.productFooter}>

            </div>
        </div>
    );
};
export default Product;



