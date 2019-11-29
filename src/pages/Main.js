import React from "react";
import Categories from "../components/Categories";
import classNames from 'classnames';
import Head from "next/head";
import {connect} from 'react-redux';
import {ApiService} from "../api";
import styles from '../styles/main.scss';
import Banner from "../components/Banner";
import Product from "../components/Product";

const Main = ({categories, products}) => {
    return (
        <>
            <Head>
                <title>Main page</title>
                <style>
                </style>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
            </Head>
            <header className={classNames(styles.header, styles.wrapper)}>

            </header>
            <main className={classNames(styles.main, styles.wrapper)}>
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
            </main>
        </>
    )
};
Main.getInitialProps = async () => {
    const categories = await ApiService.getCategories();
    const data = await ApiService.getProducts();
    console.log(categories);
    return {
        categories: categories,
        user: {},
        products: data.products
    }
};
export default connect()(Main)