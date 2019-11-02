import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MainNavbar } from 'Components';
import 'styles/main.scss';
import './layout.scss';

const Layout = (props) => {
  const { children, page } = props;
  return (
    <div className='layout'>
      <Head>
        <title>Lite weight</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <div className='nav-container'>
        <div className='container'>
          <MainNavbar page={page} />
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
};

Layout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
