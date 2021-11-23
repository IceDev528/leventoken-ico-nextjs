import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "containers/Navigation";
import BlogList from "containers/Blog-list";
import Footer from "containers/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <GlobalStyle />
      <Navigation />
      <BlogList />
      <Footer />
    </Main>
  </ThemeProvider>

  
);

export default Home;
