import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
//var cloudinary = require("cloudinary").v2;

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
    profilePic: null
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = event => {
    this.setState({
      profilePic: event.target.files[0]
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.email) {
      //trying to get the picture to upload
      // cloudinary.v2.uploader.upload(this.state.profilePic, function(
      //   error,
      //   result
      // ) {
      //   console.log(result, error);
      // });

      API.savePic({ image: this.state.profilePic.name });
      console.log(this.state.profilePic);
      API.savePeople({
        agent: true,
        loanOfficer: false,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        company: this.state.company,
        email: this.state.email,
        password: this.state.password
        //profilePic: this.state.profilePic
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
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
              {/* encType="multipart/form-data" */}
              <div className="dropdown">
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
              </div>
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
                // value={this.state.profilePic}
                onChange={this.handleFileChange}
                name="profilePic"
                type="file"
                className="file-upload"
                data-cloudinary-field="image_id"
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
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
