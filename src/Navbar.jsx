import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

  return (
    <div class='navbar-container'>
      <div class='navbar fixed-top navbar-expand-sm navbar-light bg-light user-select-none'>
        <Link class="navbar-brand ml-5 " to='/'>
          <img 
            src={require('./img/logo.png')}
            alt="logo"
            width='55'
          />
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse mr-3" id="navbarContent">

            <ul class="navbar-nav ml-auto">
                <li class='nav-item my-1 mr-sm-2 mr-xs-2'>
                    <Link class='nav-link px-2 active' to='/'>Accueil</Link>
                </li>
                
                <li class='nav-item my-1 mx-sm-2'>
                    <Link class='nav-link px-2 active' to='/contact'>Contact</Link>
                </li>

                <li class='nav-item my-1 mx-sm-2'>
                    <Link class='btn btn-outline-info px-2' to='/rejoindre'>Rejoindre</Link>
                </li>
            </ul>

        </div>

      </div>
    </div>
  );
}
 
export default Navbar;