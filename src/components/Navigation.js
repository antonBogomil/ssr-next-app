import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import styles from '../styles/nav.scss';
import classNames from 'classnames';
import {links} from "../config";
import Link from 'next/link';
import Locales from "./Locales";
import Menu from "./Menu";

const Navigation = () => {
    const {locales, lang} = useSelector(state => state);
    return (
        <nav className={styles.nav}>
            <div className={classNames(styles.navWrapper, 'wrapper')}>
                <div className={styles.navLinks}>
                    <Link href={`${lang}/${links.channelPartners}`}>
                        <a>{locales.menu_channel_partners}</a>
                    </Link>
                    <Link href={`${lang}/${links.manufactures}`}>
                        <a>{locales.manufacturers}</a>
                    </Link>
                    <a href={`${links.partners}`}>
                        {locales.lang_marketplace}
                    </a>
                </div>
                <div className={styles.navLocale}>
                    <Locales/>
                </div>
                <div className={styles.navMenu}>
                    <Menu/>
                </div>
            </div>
        </nav>
    );
};

export default connect()(Navigation);