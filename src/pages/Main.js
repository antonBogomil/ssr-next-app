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
                <div className={classNames('wrapper', styles.mainWrapper)}>
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
Main.getInitialProps = async (context) => {
    if (context.req) {
        const categoriesRes = ApiService.getCategories();
        const productsRes = ApiService.getProducts();
        const translationsRes = ApiService.getTranslations({language: 'en', tokens: tokens});
        const productsResult = await productsRes;
        const translationsResult = await translationsRes;
        const categoriesResult = await categoriesRes;
        const locales = await translationsResult.json();
        const categories = await categoriesResult.json();
        const productsData = await productsResult.json();
        // dispatch(initPage({categories, locales, products}));

        return {
            categories: categories,
            user: {},
            products: productsData.products,
            locales: locales.data,
        }
    } else {
    }
    return context

};
export default connect()(Main)