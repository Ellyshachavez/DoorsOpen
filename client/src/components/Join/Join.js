import React from 'react';
import API from "../../utils/API";
import "./Join.css";
import NavBar from "../NavBar";
// import { Link } from 'react-router-dom';

const axios = require("axios");

const url = "https://api.cloudinary.com/v1_1/dzbqct4oi/image/upload";

class Join extends React.Component {
  state = {
    
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    selectedOption: "agent",
    agent: true,
    loanOfficer: false,
    title: "",
    password: "",
    profilePic: null,
    message: ""

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSignup = (event) => {
    event.preventDefault()
    const { history } = this.props;
    const { email, password, firstName, lastName, company, profilePic } = this.state;
    if (this.state.firstName && this.state.email) {
      console.log(this.state.profilePic);
      if (this.state.selectedOption === "agent") {
      API.join({ 
      agent: true,
      loanOfficer: false,
      firstName: firstName,
      lastName: lastName,
      company: company,
      email: email,
      password: password,
      profilePic: profilePic
    })
      .then(res => history.push('/login') )
      .catch(err => console.log(err))
      } else {
        API.join ({
          agent: false,
          loanOfficer: true,
          firstName: firstName,
          lastName: lastName,
          company: company,
          email: email,
          password: password,
          profilePic: profilePic
        })
        .then(res => history.push('/login') )
        .catch(err => console.log(err))
      }
    }
  }




handlePicChange = responseUrl => {
  this.setState({ profilePic: responseUrl });
};

handleOptionChange = changeEvent => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
};


  render() {
    const { email, password, firstName, lastName, company} = this.state;

    return (

        <div>
          <NavBar />

        <div className="container">
        <form className="form-signin space">
                <h2 className="form-signin-heading">Register</h2>
                <input
                   value={firstName}
                   onChange={this.handleChange}
                   name="firstName"
                   type="text"
                   className="form-control register"
                   placeholder="First Name"
                   required
                />
                <input
                  value={lastName}
                  onChange={this.handleChange}
                  name="lastName"
                  type="text"
                  className="form-control register"
                  placeholder="Last Name"
                  required
                />
                <input
                  value={company}
                  onChange={this.handleChange}
                  name="company"
                  type="text"
                  className="form-control register"
                  placeholder="Company Name"
                />
                 <input
                type="radio"
                name="gender"
                value="agent"
                checked={this.state.selectedOption === "agent"}
                className="form-check-input radio-inline"
                onChange={this.handleOptionChange}
              />{" "}
              <label className="inline">Agent</label>
              <input
                type="radio"
                name="gender"
                value="loanOfficer"
                className="form-check-input radio-inline"
                checked={this.state.selectedOption === "loanOfficer"}
                onChange={this.handleOptionChange}
              />{" "}
              <label className="inline">Loan Officer</label>

              <br />
                

                <input id="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  className="form-control register"
                  placeholder="Email address"
                  required
                />
                <input type="password"
                 className="form-control register" 
                 placeholder="Password" 
                 name="password" 
                 value={password} 
                 onChange={this.handleChange} 
                 required /> 

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
                <button onClick={this.handleSignup}>Sign up</button>
              </form>
        </div>
    </div>
      );
  }
}


export default Join;