import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MainNavbar } from 'Components';
import 'styles/main.scss';
import './layout.scss';
import AlertContainer from 'ReduxModules/alert/AlertContainer';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const Layout = (props) => {
  const { children, page, dispatch } = props;

  return (
    <div className='layout'>
      <Head>
        <title>Lite weight</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
      </Head>
      <div className='nav-container'>
        <div className='container'>
          <MainNavbar page={page} dispatch={dispatch} />
        </div>
      </div>
      <div className='main'>
        <div className='container home-content'>
          <div className='alarms'>
            <AlertContainer />
          </div>
          {children}
          {/* <div className="mt-5"><Footer /></div> */}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  children: null,
  page: '',
};

export default Layout;
