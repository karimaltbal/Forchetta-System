import React, { Fragment } from 'react'
import { Helmet } from "react-helmet-async";




import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import BlogList from './BlogList';

const Blog = () => {


  return (
    <>
      <Helmet>
        <title>Blogs Forchetta</title>
        <meta property="og:title" content="Blogs &mdash; Forchetta" />
        <meta itemprop="name" content="Blogs — Forchetta" />
        <meta name="twitter:title" content="Blogs — Forchetta" />
      </Helmet>

      <Fragment>

        <Header />

        <BlogList />

        <Footer />
      </Fragment>
    </>
  );
};

export default Blog