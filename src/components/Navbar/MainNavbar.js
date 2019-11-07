import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './mainNavbar.scss';
import logo from '../../../public/images/favicon.png';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const MainNavbar = (props) => {
  // console.log('cookies', cookies.get('token'));
  const { page } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderNavMenu = (page) => {
    if (page !== 'register' && page !== 'login') {
      return (
        <React.Fragment>
          <NavItem>
            <Link href='/exercises'>
              <a>Додати вправи</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/trainings'>
              <a>Записати тренування</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/login'>
              <a>Вийти</a>
            </Link>
          </NavItem>
        </React.Fragment>
      );
    }
  };

  return (
    <div className='main-nav'>
      <Navbar dark expand='md'>
        <Link href='/'>
          <a>
            <div className='logo' href='/'>
              <img className='logo-img' src={logo} />
              Lite weight
            </div>
          </a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {renderNavMenu(page)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

MainNavbar.propTypes = {
  page: PropTypes.string.isRequired,
};

MainNavbar.defaultProps = {};

export default MainNavbar;
