import React from "react";
import Head from "next/head";
import FavIcon from "assets/images/fav-icon.svg";

const Main = ({
  children,
  title = "LevenToken",
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#ec5555" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Main;
