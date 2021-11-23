import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "containers/Navigation";
import BlogPage from "containers/Blog-full";
import Footer from "containers/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <GlobalStyle />
      <Navigation />
      <BlogPage />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
