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
