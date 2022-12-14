
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

import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Stuff from "./components/pages/Stuff";
import CurrentEvents from "./components/pages/CurrentEvents";
import DiscordCommunity from "./components/pages/DiscordCommunity";
import Alumni from "./components/pages/Alumni";


export default function App(){
  return (
    <HashRouter>
        <div>
          <Navbar />
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={CurrentEvents}/>
            <Route path="/discordComm" component={DiscordCommunity}/>
            <Route path="/alumni" component={Alumni}/>
          </div>
        </div>
        </HashRouter>
  )
}