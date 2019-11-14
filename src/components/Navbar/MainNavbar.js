import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './mainNavbar.scss';
import logo from '../../../public/muscle.png';
import Link from 'next/link';
import PropTypes from 'prop-types';

const MainNavbar = (props) => {
  const { page } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderNavMenu = (page) => {
    if (page !== 'register' && page !== 'login') {
      return (
        <React.Fragment>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link href='/exercises'>
                  <a className='nav-link'>Додати вправи</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/trainings'>
                  <a className='nav-link'>Записати тренування</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/login'>
                  <a className='nav-link'>Вийти</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </React.Fragment>
      );
    }
  };

  return (
    <div className='main-nav'>
      <Navbar color='white' expand='md' light>
        <Link href='/'>
          <a>
            <div className='logo' href='/'>
              <img className='logo-img' src={logo} />
              Lite weight
            </div>
          </a>
        </Link>
        {renderNavMenu(page)}
      </Navbar>
    </div>
  );
};

MainNavbar.propTypes = {
  page: PropTypes.string.isRequired,
};

MainNavbar.defaultProps = {};

export default MainNavbar;
