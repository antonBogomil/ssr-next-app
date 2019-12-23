import React, {useState} from 'react';
import styles from "../styles/search.scss";
import Button from "./Button";
import {useSelector} from 'react-redux';

const Search = (props) => {
    const {children} = props;
    const [input, setInput] = useState('');
    const {locales, lang} = useSelector(state => state);
    return (
        <form className='search'>
            <input type='search'/>
            <Button>{locales.search_button_title}</Button>
        </form>
    );
};

export default Search;