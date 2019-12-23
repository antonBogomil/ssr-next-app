import React, {useState} from 'react';
import styles from '../styles/menu.scss';
import classNames from 'classnames';
import {menu} from "../config";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={styles.menu}>
            <span className={classNames(styles.burgerIcon, {[styles.burgerIconClose]: isOpen})} onClick={() => {
                setOpen(!isOpen)
            }}/>
            {isOpen && <List/>}
        </div>
    );
};

const List = () => (
    <div className={styles.menuList}>
        <ul>
            {menu.public.map((item) => {
                return (
                    <li key={item.name}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
);

export default Menu;