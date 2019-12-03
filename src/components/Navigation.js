import React ,{useEffect} from 'react';
import styles from '../styles/nav.scss';
import classNames from 'classnames';
import {ApiService} from "../api";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <a href='/cp'>Channel partners</a>
                <a href='/cp'>Channel partners</a>
                <a href='/cp'>Channel partners</a>
            </div>
            <div className={styles.navLocale}>

            </div>
            <div className={styles.navMenu}>

            </div>
        </nav>
    );
};

export default Navigation;