import React, { Component } from "react";
import "./NavBar.css";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: ""
    }
  };

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
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
              The Doors Open
            </a>
            <span className="loginUser">
            {this.props.loggedIn ? `Hi ${this.props.firstName}` : null}
          </span>
          {this.props.loggedIn && this.props.firstName 
          ? (<a className="navbar-brand" href="/">
          Sign Out
        </a>
          ): <a className="navbar-brand" href="/login">
          Sign In
        </a>}
          <a className="navbar-brand" href="/join">
              join
            </a>

          </nav>
        );
  }

};

export default NavBar;