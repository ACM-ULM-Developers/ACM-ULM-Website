
import React from 'react'

import 
    {Switch,
    Routes,
    Route,
    NavLink,
    HashRouter}
   from "react-router-dom";


/*import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
    NavLink,
    HashRouter
} from "react-router-dom";*/

  import Home from "./pages/Home";
  import Stuff from "./pages/Stuff";
  import Contact from "./pages/Contact";
  import DiscordComm from "./pages/DiscordComm";
  import Alumni from "./pages/Alumni";


const Main = () => {
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
            <li><NavLink to="/discordComm"> ULM Discord Community </NavLink></li>
            <li><NavLink to="/alumni"> Alumni </NavLink></li>


          </ul>
          <div className="content">
        
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/discordComm" component={DiscordComm}/>
            <Route path="/alumni" component={Alumni}/>
        
          </div>
        </div>
        </HashRouter>
  )
}

export default Main