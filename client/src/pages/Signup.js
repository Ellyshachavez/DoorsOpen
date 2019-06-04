import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
//var cloudinary = require("cloudinary").v2;

const axios = require("axios");

const url = "https://api.cloudinary.com/v1_1/dzbqct4oi/image/upload";
//const cloudinary = require("cloudinary-core").Cloudinary.new();
//const cloudinary = require("cloudinary-core");

class Signup extends Component {
  state = {
    agent: true,
    loanOfficer: false,
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
    profilePic: null,
    selectedOption: "agent"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handlePicChange = responseUrl => {
    this.setState({ profilePic: responseUrl });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.email) {
      console.log(this.state.profilePic);
      if (this.state.selectedOption === "agent") {
        API.savePeople({
          agent: true,
          loanOfficer: false,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          company: this.state.company,
          email: this.state.email,
          password: this.state.password,
          profilePic: this.state.profilePic
        }).catch(err => console.log(err));
      } else {
        API.savePeople({
          agent: false,
          loanOfficer: true,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          company: this.state.company,
          email: this.state.email,
          password: this.state.password,
          profilePic: this.state.profilePic
        }).catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <Jumbotron>
              <h1>Welcome to The Doors Open!</h1>
            </Jumbotron>
            <form>
              <input
                type="radio"
                name="gender"
                value="agent"
                checked={this.state.selectedOption === "agent"}
                className="form-check-input"
                onChange={this.handleOptionChange}
              />{" "}
              Agent
              <br />
              <input
                type="radio"
                name="gender"
                value="loanOfficer"
                className="form-check-input"
                checked={this.state.selectedOption === "loanOfficer"}
                onChange={this.handleOptionChange}
              />{" "}
              Loan Officer
              <br />
              {/* <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Title
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Agent
                  </a>
                  <a className="dropdown-item" href="#">
                    Loan Officer
                  </a>
                </div>
              </div> */}
              <br />
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.company}
                onChange={this.handleInputChange}
                name="company"
                placeholder="Company"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              Profile Picture: <br />
              {/* <uploadPic /> */}
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={e => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  formData.append("upload_preset", "vdxg70on");
                  return axios
                    .post(url, formData, {
                      headers: {
                        "Content-Type": "multipart/form-data"
                      }
                    })
                    .then(res => this.handlePicChange(res.data.url));
                }}
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Signup;
