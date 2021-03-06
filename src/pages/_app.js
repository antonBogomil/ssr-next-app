import React from 'react';
import {Provider} from 'react-redux';
import App from "next/app";
import withRedux from "next-redux-wrapper";
import store from '../store';
import '../styles/default.css';

class MyApp extends App {
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}
export default withRedux(store)(MyApp);