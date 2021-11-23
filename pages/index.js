import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "containers/Navigation";
import Banner from 'containers/Banner';
import Service from "containers/Service";
import CoinFund from "containers/CoinFund";
import About from "containers/About";
import Awards from "containers/Awards";
import UserMap from "containers/UserMap";
import Wallet from "containers/Wallet";
import Statistics from "containers/Statistics";
import Stack from "containers/Stack"; 
import Faq from "containers/Faq";
import Footer from "containers/Footer";

import FavIcon from "assets/images/fav-icon.svg";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>LevenToken ICO</title>
        <meta name="Description" content="A User Owned Decentralized Settlement Network For Real World Payments" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />
      <Navigation />
      <Banner />
      <Service />
      <CoinFund />
      <About />
      <Awards />
      <UserMap />
      <Wallet />
      <Statistics />
       <Faq />
      <Stack />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
