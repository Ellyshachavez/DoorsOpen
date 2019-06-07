import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
// import NavBar from "../components/NavBar";
import UserContext from '../../utils/UserContext';

import './Home.css';

const register = require("../../images/register.png");
const folder = require("../../images/folder.png");
// const house = require("");

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
      <div className = "Main">
      <div className= "homeBody">
        <Container fluid>
        <Row>
          <Col size= "3"></Col>
          <Col size ="6">
          <Jumbotron>
              <h1 className="jumboText">The Door's Open</h1>
            </Jumbotron>
          </Col>
        </Row>        
        </Container>   
        </div>
      </div>
<div className= "about">
<Container>
  <Row>
  <Col size="3"></Col>
    <section className="bg-primary" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                  <h1 className="section-heading ">The Best Way to Track your Open House Events</h1>
                  {/* <img src= {house}/> */}

                  <hr className="light my-4"></hr>
                  {/* <img src= {house}/> */}
                  <h1 className="section-heading1 "> Just leave the Door Open for your guests!</h1>
                  <br />
                  <Row>
                  <Col size="6">
                  <p className=" aboutText">
                  Organize your Open House Events. 
                  </p>
                  </Col>
                  <Col size="6">
                  <img src= {folder} alt= "folder" className="icon one" />
                  </Col>
                  </Row>
                  <br/>
                  <Row>
                  <Col size="6"> 
               
                   <img src= {register} alt="registration form" className="icon two"/>
                   </Col>
                   <Col size="6">
                   <p>   
                  Automate your Guests registrations.
                  <br/>
                  </p>
                  </Col>
                  </Row>
                       
                  <br />
                  <br />
                  </div>
              </div>
          </div>
          </section>
          </Row>
          </Container>
          </div>
          </div>
    );
  }
}

export default Home;
