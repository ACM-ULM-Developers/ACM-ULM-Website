import React, { Component } from "react";

import {
    Switch,
    Routes,
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";


/*import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
    NavLink,
    HashRouter
} from "react-router-dom";*/

  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";



class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1 id = "initial">ACM <br /></h1>
          <h3 id = "second">University of Louisiana Monror</h3>
          <ul className="header">

            <li><NavLink to ="/"> Home </NavLink></li>
            <li><NavLink to="/stuff"> Academics </NavLink></li>
            <li><NavLink to="/contact"> Current Events </NavLink></li>
            <li><NavLink to="/contact"> Executive Members </NavLink></li>
            <li><NavLink to="/contact"> ULM Discord Community </NavLink></li>


          </ul>
          <div className="content">
        
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
        
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;