import React, { Component } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';


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
            <Link className="navbar-brand" to="/">
              Door's Open
            </Link>
            {user ? (
              
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div>Hello {user.firstName}, </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to={"/calendar/"}>Calendar</Link>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/logout"><i className="fas fa-sign-out-alt"></i> Log Out</a>
              </li>
            </ul>
            ): (
              <div className="navbar-nav" id="doorsOpen">
              <Link className="nav-link" to="/"></Link>
                <Link className="nav-link" to="/join">Join</Link>
                <Link className="nav-link" to="/login">Login</Link>
              </div>
            )}
          </nav>
        )}
      </UserContext.Consumer>
  
        );
  }

};

export default NavBar;