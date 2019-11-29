import React from 'react';
import styles from '../styles/categories.scss';
import Link from "next/link";
const Categories = ({data = []}) => {
    return (
        <div className={styles.categories}>
            {data.map((item) => {
                return (
                    <div className={styles.item} key={item.category_id}>
                        <Link href={`/search/${item.url_name}`}>
                            <a>
                                <div>
                                    <img src={'https://icecat.co.uk' + item.thumb_pic} alt={item.thumb_pic}/>
                                </div>
                                <div>
                                    <span>{item.name}</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            } )}
        </div>
    )
};
export default Categories