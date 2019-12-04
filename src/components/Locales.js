import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import classNames from 'classnames';
import {links, topCountriesConfig} from "../config";
import Link from 'next/link';
import styles from '../styles/locales.scss';

const Locales = () => {
    const {locales, lang} = useSelector(state => state);
    return (
        <div className={styles.locale}>
            <div className={styles.countries}>
                <Countries/>
                <Link href={`${lang}/${links.countries}`}>
                    <a>{locales.lang_more}</a>
                </Link>
            </div>
            <div className={styles.language}>

            </div>
        </div>
    );
};


const Countries = () => {
    return (
        <ul className={styles.languageList}>
            {topCountriesConfig.map((c) => {
                return (
                    <li key={c.name}>
                        <Link href={'/prefere' + c.href}>
                            <a title={c.name}>
                                <img src={c.img}/>
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};


export default connect()(Locales);