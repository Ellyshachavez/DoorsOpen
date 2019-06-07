import React, { Component } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
const doorIcon = require ("./dooricon(2).png");

class NavBar extends Component {

  logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("_id");
    window.location="/";
  };

  render() {
  
      return (
        <UserContext.Consumer>
        {({user}) => (
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <img src= {doorIcon} alt="Door Logo"/>
            <Link className="navbar-brand" to="/">
              Door's Open
            </Link>
            {user ? (
              
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="hello">Hello {user.firstName}! </div>
              </li>
              <li className="nav-item navbar-nav">
                <Link className="nav-link js-scroll-trigger rightSide" to={"/leads/"}>Leads</Link>
              </li>
              <li className="nav-item navbar-nav">
                <Link className="nav-link js-scroll-trigger rightSide" to={"/register/"}>Form</Link>
              </li>
              <li className="nav-item navbar-nav">
                <Link className="nav-link js-scroll-trigger rightSide" to={"/calendar/"}>Calendar</Link>
              </li>
              <li className="nav-item navbar-nav">
                  <a className="nav-link rightSide" href="/logout"><i className="fas fa-sign-out-alt"></i> Log Out</a>
              </li>
            </ul>
            ): (
              <ul className="navbar-nav ml-auto">
              <li>
              <Link className="nav-link" to="/"></Link>
              </li>
              <li className="navbar-nav">
                <Link className="nav-link rightSide navbar-nav" to="/join">Join</Link>
                </li>
                <li className="navbar-nav">
                <Link className="nav-link rightSide navbar-nav" to="/login">Login</Link>
                </li>
                </ul>
            )}
          </nav>
        )}
      </UserContext.Consumer>
  
        );
  }

};

export default NavBar;