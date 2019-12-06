import React, {useState} from 'react';
import styles from '../styles/menu.scss';
import classNames from 'classnames';

const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    return (
        <div className={styles.menu}>
            <span className={classNames(styles.burgerIcon, {[styles.burgerIconClose]: isOpen})} onClick={() => {
                setOpen(!isOpen)
            }}/>
        </div>
    );
};

export default Menu;