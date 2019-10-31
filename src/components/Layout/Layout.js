import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Navbar } from 'Components';
import 'styles/main.scss';
import './layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <Head>
      <title>Lite weight</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    </Head>
    <div className='nav-container'>
      <div className='container'>
        <Navbar />
      </div>
    </div>
    <div className='main'>
      <div className='container home-content'>
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
