import React from 'react';
import styles from '../styles/search.scss';
import logoImage from '../images/logo_new.png';
import classNames from 'classnames';
import Link from 'next/link';

const SearchNavigation = () => {
    return (
        <nav className={styles.navigationSearch}>
            <div className={classNames(styles.navigationSearchWrapper, 'wrapper')}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <a>
                            <img src={logoImage} alt='Icecat'/>
                        </a>
                    </Link>
                </div>
                <div className={styles.search}>

                </div>
            </div>
        </nav>
    );
};

export default SearchNavigation;