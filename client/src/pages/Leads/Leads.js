import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Leads extends Component {
  state = {
    id: "",
    name: [],
    email: [],
    number: []
  };

  componentDidMount() {
    this.loadLeads();
  }

  loadLeads = () => {
    API.getPeople("5cf5c3ba19a6ff3da052717c")
      .then(res =>
        this.setState({
          name: res.data.events.registrations.name,
          email: res.data.events.registrations.email,
          number: res.data.events.registrations.phone
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
                <tr>
                  <td>{this.state.name[0]}</td>
                  <td>{this.state.email[0]}</td>
                  <td>{this.state.number[0]}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Leads;