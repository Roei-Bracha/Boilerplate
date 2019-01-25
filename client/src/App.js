import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import WelcomePage from './Components/WelcomePage/WelcomePage'
import NavBar from './Components/NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact component={WelcomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
