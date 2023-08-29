import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import canOfBooks from './img/can-of-books.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='navBar'>
        <img className='navBarImg' src={canOfBooks} alt='can-of-books-logo'/>
        <Navbar.Brand className='navBarTitle'>My Favorite Books</Navbar.Brand>
        <div className='navItems'>
          <NavItem><Link to='/' className='nav-link'>Home</Link></NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
          <NavItem><Link to='/about' className='nav-link'>About Us</Link></NavItem>
        </div>
      </Navbar>
    );
  }
}

export default Header;
