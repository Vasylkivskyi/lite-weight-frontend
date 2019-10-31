import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Favicon } from 'Components';
import 'styles/main.scss';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Lite weight</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <Favicon />
    </Head>
    <div className='main'>
      {/* <HomeHeader /> */}
      <div className='container-fluid home-content'>
        {children}
        {/* <div className="mt-5"><Footer /></div> */}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
