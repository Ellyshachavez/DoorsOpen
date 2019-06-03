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
    const { email, password, firstName, lastName, company, title, profilePic } = this.state;
    if (this.state.firstName && this.state.email) {
      console.log(this.state.profilePic);
    API.join({ email, password, firstName, lastName, company, title, profilePic })
      .then(res => history.push('/login') )
      .catch(err => console.log(err))
  }
}

  render() {
    const { email, password, firstName, lastName, company, title} = this.state;

    return (

        <div>
          <NavBar />

        <div className="container">
        <form className="form-signin">
        {/* <div>
              {this.state.message !== ''
              ? <div>
              {this.state.message.toString().includes('Successful') ?
                  (<div className="alert alert-success" role="alert">
                    {this.state.message} Please  <Link to="/login">Click Here </Link> to Login
                  </div>):(<div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>)}
              </div>
              :null
              }</div> */}
    
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
                  value={title}
                  onChange={this.handleChange}
                  name="title"
                  type="text"
                  className="form-control register"
                  placeholder="Agent or Loan Officer"
                />
                

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
                    .then(res => (this.state.profilePic = res.data.url));
                }}
              />

                <button onClick={this.handleSignup}>Sign up</button>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
              </form>
        </div>
    </div>
      );
  }
}


export default Join;