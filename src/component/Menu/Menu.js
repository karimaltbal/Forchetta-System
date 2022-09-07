import React from 'react'
import { Helmet } from "react-helmet-async";

import MenuList from "./MenuList";
import Reservation from "./Reservation";

import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu Forchetta</title>
        <meta property="og:title" content="Menu &mdash; Forchetta" />
        <meta itemprop="name" content="Menu — Forchetta" />
        <meta name="twitter:title" content="Menu — Forchetta" />
      </Helmet>
      
      <Header />

      <>
        <MenuList />
      </>

      <>
        <Reservation />
      </>

      <Footer />
    </div>
  );
}

export default Menu