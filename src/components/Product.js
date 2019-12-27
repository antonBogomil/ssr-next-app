import React from 'react';
import styles from '../styles/product.scss';
import {getUpdateTime} from "../helpers";
import ImageLoader from "./ImageLoader";
import Moment from 'react-moment';
import Link from "next/link";
import {useSelector} from 'react-redux';

const icecatBrandSrc = 'https://uk.icecat.biz/themes/transitional/images/placeholder3.jpg';
const noImageSrc = 'https://uk.icecat.biz/themes/basic/css/imgs/noimage.png';

const Product = ({product}) => {
    const {manufacturer_image, supplier_name, updated, product_picture_id, url, title} = product;
    const {lang, locales} = useSelector((state) => state);
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
                    <Moment locale={lang}
                            fromNow
                    >
                        {updated}
                    </Moment>
                </div>
            </div>
            <div className={styles.productMain}>
                <div className={styles.productImage}>
                    <img src={noImageSrc} alt={product_picture_id}/>
                    {/*<ImageLoader gallery={product_picture_id} productId={product_id}/>*/}
                </div>
                <div>{product.short_summary_description}
                    <a href={product.url}>{locales.lang_more}</a>
                </div>
            </div>
            <div style={styles.productFooter}>

            </div>
        </div>
    );
};
export default Product;



