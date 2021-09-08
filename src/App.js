import logo from './logo.svg';
import './App.css';
import Game from "./pages/Game";
import Home from "./pages/Home";
import Score from "./pages/Score";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/score">
                        <Score />
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
