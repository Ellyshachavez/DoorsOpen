import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Peoples from "./pages/Peoples";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Peoples} />
          <Route exact path="/peoples" component={Peoples} />
          <Route exact path="/peoples/:id" component={Detail} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
