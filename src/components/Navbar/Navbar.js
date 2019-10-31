import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.scss';
import logo from '../../../public/images/favicon.png';
import Link from 'next/link';

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='main-nav'>
      <Navbar dark expand='md'>
        <Link href='/'>
          <a>
            <NavbarBrand className='logo-text' href='/'>
              <img className='logo-img' src={logo} />
              Light weight
            </NavbarBrand>
          </a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <Link href='/exercises'>
              <a>
                <NavItem>
                  <NavLink>Додати вправи</NavLink>
                </NavItem>
              </a>
            </Link>
            <Link href='/trainings'>
              <a>
                <NavItem>
                  <NavLink>Записати тренування</NavLink>
                </NavItem>
              </a>
            </Link>
            <Link href='/login'>
              <a>
                <NavItem>
                  <NavLink>Залогуватись</NavLink>
                </NavItem>
              </a>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
