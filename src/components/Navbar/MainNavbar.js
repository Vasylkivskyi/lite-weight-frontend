import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './mainNavbar.scss';
import logo from '../../../public/images/favicon.png';
import Link from 'next/link';
import PropTypes from 'prop-types';

const MainNavbar = (props) => {
  const { page } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderNavMenu = (page) => {
    if (page === 'register') {
      return (
        <NavItem>
          <Link href='/login'>
            <a>Логін</a>
          </Link>
        </NavItem>
      );
    } else if (page === 'login') {
      return (
        <NavItem>
          <Link href='/register'>
            <a>Реєстрація</a>
          </Link>
        </NavItem>
      );
    } else {
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
