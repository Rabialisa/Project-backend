import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {GiShop} from 'react-icons/gi';


const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
   
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link to="/" className="navbar-brand">
       <GiShop/> emart
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          to="/" 
          className="nav-link" 
          >
          Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          to="/product" 
          className="nav-link" 
          >
          Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Register" className="nav-link" href="#">
          Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Login" className="nav-link" href="#">
          Login
          </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header;
