import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbarSection wow bounceInDown" data-wow-duration="2s">
        <div className='brand'>
            BoDy
        </div>
        <div className="collapse">
          <i className="fa fa-bars"></i>
        </div>
        <ul className='menu'>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className='social-icon'>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-github"></i>
        </div>
    </div>
  )
}

export default Navbar;