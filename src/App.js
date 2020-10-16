import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Main from './component/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/marcos/alvarez">Main</Link>
        <Link to="/home">Home</Link>
        <Link to={{ pathname: "/about", state: { from: "root" } }}>About</Link>


        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:name/:lastname" exact component={Main} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
