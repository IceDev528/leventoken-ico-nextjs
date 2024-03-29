import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../src/components/main";

import Navigation from "containers/Navigation";
import BlogSinglePage from "containers/Blog-single";
import Footer from "containers/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const BlogSingle = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main>
      <Navigation />
      <BlogSinglePage />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default BlogSingle;
