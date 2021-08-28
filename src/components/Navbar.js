import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adslogo.png'; 
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="logoImage" src={logo} alt="Logo" />
            ADS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink to='/#presentation' className='nav-links' onClick={closeMobileMenu}>
                Présentation
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink 
                to='/#activites'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Activité
              </HashLink >
            </li>
            <li className='nav-item'>
              <HashLink
                to='/#temoignage'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Témoignage
              </HashLink>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nous contacter
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
