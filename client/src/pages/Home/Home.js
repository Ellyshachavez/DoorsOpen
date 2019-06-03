import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
// import NavBar from "../components/NavBar";
import UserContext from '../../utils/UserContext';

import './Home.css';



class Home extends Component {
  static contextType = UserContext;

  email = "";
  _id = "0"; // Can not be null
 

  state = {
    email: "",
    firstName: "",
    lastName: "",

    company: "",
    title: "",
 
    loggedIn:false,
    message: ""

  }



  render() {
    return (
      <div>
      {/* <NavBar loggedIn = {this.state.loggedIn} email = {this.state.firstName}/> */}
      <div className="Main">
        <Container fluid>
        <Row>
          <Col size ="6">
          <Jumbotron>
              <h1>The Doors Open</h1>
            </Jumbotron>

          </Col>
        </Row>
        </Container>
      
        </div>

      </div>
    );
  }
}

export default Home;
