import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Leads from "./pages/Leads/Leads";
import Calendar from "./pages/Calendar/Calendar";
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Join from "./components/Join";
import PassReq from "./components/PassReq";
import NavBar from './components/NavBar';
import Registration from './pages/Registration/registration';
import {UserProvider} from './utils/UserContext';



class App extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
  return (
    <UserProvider>
        <Router>
          <div>
          <NavBar/>
            <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Calendar} />
          <Route exact path="/register" component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/join' component={Join} />
          <Route path='/passwordrequest' component={PassReq}/>
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/calendar/:id" component={Calendar} />
          <Route path='/Calendar' component={Calendar} />
          <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
      </UserProvider>

  )
}
}

export default App;
