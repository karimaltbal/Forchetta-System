import React from 'react'
import { Helmet } from "react-helmet-async";

import "./home.css"; 

import MenuList from "../Menu/MenuList";
import Reservation from "../Menu/Reservation";

import Defintionabout from '../About/Defintionabout';
import Companylist from "../Events/Companylist"

import Header from "../layout/Header/Header"
import Footer from "../layout/Footer/Footer"
import BlogList from '../Blog/BlogList';


const Home = () => {
  
  return (
    <div className="homePage">
      <Helmet>
        <title>Forchetta</title>
        <meta property="og:title" content="Forchetta" />
        <meta itemprop="name" content="Forchetta" />
        <meta name="twitter:title" content="Forchetta" />
      </Helmet>

      <Header />

      <div className="mainContent">
        <>
          <Defintionabout />
        </>

        <>
          <Companylist />
        </>

        <>
          <MenuList />
          <Reservation />
        </>

        <>
          <BlogList />
        </>
      </div>

      <Footer />
    </div>
  );
}

export default Home