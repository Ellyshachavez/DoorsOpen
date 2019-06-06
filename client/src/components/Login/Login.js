import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import NavBar from "../NavBar";
import UserContext from '../../utils/UserContext'; 

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    message: "",
    currentUser: null
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLogin = (event, onLogin) => {
    event.preventDefault();
    const { history } = this.props;
    const { email, password } = this.state;
    console.log(email, password)
    API.login({ email, password })
      .then(res => {
        console.log(res.data);
        onLogin(res.data);
        history.push('/')
      })
      .catch(err => {
        this.setState({ message: err.response.data.message })
      });
  }

  render() {
    const { email, password, message } = this.state;

    return (
      <UserContext.Consumer>
        {({onLogin}) => (
<div>
<NavBar />

      <div className="container">
       

        <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="name">E-mail </label>
                <input id="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  className="form-control register"
                  placeholder="Email address"
                  required
                />
              <br/>
                <label htmlFor="password">Password </label>
                <input type="password" 
                className="form-control register" 
                placeholder="Password" 
                name="password" 
                value={password} 
                onChange={this.handleChange} 
                required 
                />
            <br/>
            <button onClick={(event) => this.handleLogin(event, onLogin)}>Sign in</button>
            <br />
            <p>
              Not a member? <Link to="/join"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
            </p>
            <p>
              Forgot Password? <Link to="/passwordrequest"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Click here</Link>
            </p>
            { message && (
              <div className="alert">
                {message}
              </div>
            )}
            </form>
          </div> 
          </div>
        )}
        </UserContext.Consumer>
    );
  }
} 

      
  
  export default Login;