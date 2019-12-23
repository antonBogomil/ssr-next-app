import React from 'react';
import styles from '../styles/button.scss';
const Button = ({type, color, children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;