import React,{useState} from 'react';
import burgerIcon from '../images/burger-icon.png';
import burgerIconClose from '../images/burger-close-icon.png';
import styles from '../styles/menu.scss';
const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={styles.menu}>
            <div className={styles.burgerIcon}>
                <img src={burgerIcon}/>
            </div>
        </div>
    );
};

export default Menu;