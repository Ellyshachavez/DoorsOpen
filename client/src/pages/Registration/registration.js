import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import UserContext from '../../utils/UserContext';
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import './registration.css';
import {Redirect } from "react-router-dom";

class Registration extends Component {
  static contextType = UserContext;

  state = {
    id: "",
    name: "",
    email: "",
    number: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    //event.preventDefault();

    API.register("5cf5c3ba19a6ff3da052717c", {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number
    }).catch(err => console.log(err));
  };

  render() {
    return (
    <UserContext.Consumer>
       {({user}) => (
         <div>
        {user ? (
     <div>    
      <Container fluid>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <Jumbotron>
              <h1>Welcome, the Door's Open!</h1>
            </Jumbotron>
            <div className="text-justify">
            <h2 >Take a look around, let the Agent or Loan Officer know if you have any questions.</h2>
              <p className="text-justify">By providing your name, phone and e-mail you are allowing {user.firstName} to follow up with you after this Open House. 
              </p>
              </div>
              <br/>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email"
              />
              <Input
                value={this.state.number}
                onChange={this.handleInputChange}
                name="number"
                placeholder="phone number"
              />

              <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      </div> 
        ): (
        
        <Redirect to="/login"/>
        )}
        </div>
       )}
        </UserContext.Consumer>
    );
  }
}

export default Registration;