import React, { Fragment } from 'react';
import Head from 'next/head'

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
       <Head>
        <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
        <script src="https://www.amcharts.com/lib/3/pie.js"></script>
        <script src="https://www.amcharts.com/lib/3/serial.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};
