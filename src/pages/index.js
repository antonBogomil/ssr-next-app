import React from "react";
import Categories from "../components/Categories";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
const App = ({categories})=>{
    return(
        <>
            <Head>
                <title>Foo</title>
                <style>

                </style>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                <Categories data={categories}/>
            </main>
        </>
    )
};
App.getInitialProps = async () => {
    const res = await fetch('https://icecat.co.uk/rest/main-categories');
    const categories = await res.json();
    return {
        categories: categories
    }
};
export default App