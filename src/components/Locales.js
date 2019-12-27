import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import classNames from 'classnames';
import {links, topCountriesConfig} from "../config";
import Link from 'next/link';
import styles from '../styles/locales.scss';
import Autocomplete from 'react-autocomplete';

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
                <Languages/>
            </div>
        </div>
    );
};

const Languages = () => {
    const {locales, lang, languages} = useSelector(state => state);
    const items = languages.map((l) => ({
        label: l.code,
        value: l.short_code_encoded
    }));
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    };
    const languageName = languages.find((l) => lang === l.shortCode).internationalValue;
    return (
        <>
            <div>
                <span className={styles.langBtn} onClick={handleClick}>{locales.lang_language}: {languageName}</span>
            </div>
            {isOpen &&
            <div className={styles.languageModal}>
                <Autocomplete
                    items={items}
                    open={isOpen}
                    getItemValue={(item) => item.value}
                    onSelect={handleClick}
                    value={languageName}
                    renderItem={(item) => (<div key={item.value}>{item.label}</div>)}
                />
            </div>
            }
        </>
    )
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