import React from 'react';
import logoImage from '../images/logo_new.png';
import classNames from 'classnames';
import styles from '../styles/nav.scss';
import Search from "./Search";
import MainInfo from "./MainInfo";

const SearchNavigation = () => {
    return (
        <nav className={styles.navigationSearch}>
            <div className={classNames(styles.navigationSearchWrapper, 'wrapper')}>
                <div className={styles.logo}>
                    <a href='/'>
                        <img src={logoImage} alt='Icecat'/>
                    </a>
                </div>
                <div className={styles.searchContainer}>
                    <Search/>
                    <MainInfo/>
                </div>
            </div>
        </nav>
    );
};
export default SearchNavigation;