import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import CategoriasList from "../components/productosEcomerce/categorias";
import BannerEcomerce from "../components/BannerEcomerce";
import Products from "../components/productosEcomerce/products";
import ProductosRelacionados from "../components/productosEcomerce/productosRelacionados";

const Productos = () => {
  return (
    <>
      <Head>
        <title>Productos</title>
      </Head>
      <Layout>
        <BannerEcomerce />
        <div className="container mt-3 mb-3">
          <div className="row">
            <CategoriasList />
            <Products/>
            <ProductosRelacionados/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Productos;
