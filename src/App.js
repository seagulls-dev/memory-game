import logo from './logo.svg';
import './App.css';
import Game from "./pages/Game";
import Home from "./pages/Home";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function App(props) {

    return (
        <Router>
            <div>

                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
