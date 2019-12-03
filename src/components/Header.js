import React from 'react';
import styles from '../styles/header.scss';
import classNames from 'classnames';
import { connect, useSelector } from "react-redux";
import Navigation from "./Navigation";
const Header = () => {
    const state = useSelector(state => state);
    console.log(state);
    return (
        <header className={styles.header}>
            <div className={classNames(styles.headerWrapper,'wrapper')}>
                <Navigation/>
            </div>
        </header>
    );
};

export default connect()(Header);