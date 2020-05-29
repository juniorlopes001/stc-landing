import React, { useState } from 'react';
import stcLogo from './assets/img/stc-logo.png'
import { Link } from 'react-router-dom'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="header">
      <Navbar color="primary"  expand="md">
        <NavbarBrand tag={Link} to='/'><img src={stcLogo} alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='/sistemaWeb' className='hover-green'>Sistema Web</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/aplicativo'  className='hover-green'>Aplicativo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/contato' className='hover-green'>Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;