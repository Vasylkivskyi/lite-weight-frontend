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
            <NavItem>
              <Link href='/exercises'>
                <a>
                  <NavLink>Додати вправи</NavLink>
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/trainings'>
                <a>
                  <NavLink>Записати тренування</NavLink>
                </a>
              </Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Авторизація
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href='/login'>
                    <a>Логін</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link href='/register'>
                    <a>Реєстрація</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
