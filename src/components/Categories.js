import fetch from "isomorphic-unfetch";
import React, {useEffect} from 'react';
import css from '../styles.scss';
import Link from "next/link";
console.log(process.env.API_URL);
const Categories = ({data = []}) => {
    useEffect(() => {
        fetch('api/language').then(r => {
            console.log(r);
        });
    }, []);
    return (
        <div className={css.categories}>
            {data.map((item) => {
                return (
                    <div className={css.item} key={item.category_id}>
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