import React from 'react';
import styles from '../styles/header.scss';
import classNames from 'classnames';
import {connect, useSelector} from "react-redux";
import Navigation from "./Navigation";
import SearchNavigation from "./SearchNavigation";
const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation/>
            <SearchNavigation/>
        </header>
    );
};

export default connect()(Header);