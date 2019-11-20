import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './mainNavbar.scss';
import logo from '../../../public/muscle.png';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { logOutUser } from 'ReduxModules/auth/authActions';

const MainNavbar = (props) => {
  const { page, dispatch } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const renderNavMenu = (page) => {
    if (page === 'training') {
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
                <div onClick={handleLogOut} className='nav-link'>
                  Вийти
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </React.Fragment>
      );
    }

    if (page === 'exercises') {
      return (
        <React.Fragment>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link href='/training'>
                  <a className='nav-link'>Записати тренування</a>
                </Link>
              </NavItem>
              <NavItem>
                <div onClick={handleLogOut} className='nav-link'>
                  Вийти
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </React.Fragment>
      );
    }
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
                <Link href='/training'>
                  <a className='nav-link'>Записати тренування</a>
                </Link>
              </NavItem>
              <NavItem>
                <div onClick={handleLogOut} className='nav-link'>
                  Вийти
                </div>
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
  dispatch: PropTypes.func.isRequired,
};

MainNavbar.defaultProps = {};

export default MainNavbar;
