import React, { Component } from 'react';
import './PassReq.css';
import API from "../../utils/API";
import { FormBtn } from "../Form";

class PassReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationMsg: ''
    };
  }
    onSubmit = (e) => {
        if(e) e.preventDefault();
        const email = this.input.value;
        console.log('Your name is', email);

        const emailobj = {
            email:email
        }

          API.sendPassEmail(emailobj)
          .then((result) => {
            this.setState({
              confirmationMsg:result.data.Success
            });
          })
          .catch((error) => {
            if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password do not match' });
            }
          });
      };
render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
        {this.state.confirmationMsg !== '' ?
            <div className="alert alert-success alert-dismissible" role="alert">
              {this.state.confirmationMsg} Please check your inbox!
            </div>:null
          }
          <h2 className="form-signin-heading">Password Reset</h2>
          <p className="alert alert-info alert-dismissible">
          Enter the email address associated with your account. You will receive an email containing a link to reset your password shortly.</p>
          <label name="inputEmail" className="sr-only">Email address</label>
          <input id="email"
            type="email"
            ref={(element) => { this.input = element }}
            name="username"
            className="form-control join"
            placeholder="Email address"
            required
          />
          <FormBtn bsStyle="danger" className="btn btn-lg btn-primary btn-block" type="submit">Send Email</FormBtn>

        </form>
      </div>
    );
  }
}
export default PassReq;