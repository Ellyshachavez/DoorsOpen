import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Signup extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <br />
        <Row>
          <Col size="md-2">Agent or loan officer?:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">First name:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">Last name:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">Company:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">Email:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">Password:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">Profile Picture:</Col>
          <Col size="md-8">
            <Input />
          </Col>
        </Row>
        <FormBtn>Submit</FormBtn>
      </Container>
    );
  }
}

export default Signup;

{
  /* <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.book.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link> */
}
