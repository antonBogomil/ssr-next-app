import React from "react";
import Categories from "../components/Categories";
import classNames from 'classnames';
import Head from "next/head";
import {connect} from 'react-redux';
import {ApiService} from "../api";
import styles from '../styles/main.scss';
import Banner from "../components/Banner";
import Product from "../components/Product";
import Header from "../components/Header";
import tokens from "../dictionary";
import {initPage} from "../store/actions";

const Main = ({categories, products, locales, dispatch}) => {
    return (
        <>
            <Head>
                <title>Main page</title>
                <style>
                </style>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <main className={classNames(styles.main)}>
                <div className='wrapper'>
                    <section className={classNames(styles.mainContainer, styles.mainContainerProducts)}>
                        <div className={styles.mainProducts}>
                            <div className={styles.productsHeader}>

                            </div>
                            <div className={styles.productsList}>
                                {
                                    products.map((product) => {
                                        return (
                                            <Product key={product.product_id}
                                                     product={product}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    <aside className={classNames(styles.mainContainer, styles.mainContainerAside)}>
                        <Banner/>
                        <Categories data={categories}/>
                    </aside>
                </div>
            </main>
        </>
    )
};
Main.getInitialProps = async ({store}) => {
    const categories = await ApiService.getCategories();
    const productsData = await ApiService.getProducts();
    const translations = await ApiService.getTranslations({language: 'en', tokens: tokens});
    const locales = translations.data;
    console.log(store);
    store.dispatch(initPage({categories, locales}));
    return {
        categories: categories,
        user: {},
        products: productsData.products,
        locales: locales,
    }
};
export default connect()(Main)