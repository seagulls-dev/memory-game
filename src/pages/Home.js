import React from 'react';
import { Link } from "react-router-dom";


const Home = props => {
    return (
        <React.Fragment>
            <h1>
                Welcome My Game
            </h1>
            <Link to="/game">
                <button className="button button--success text-center">
                    Play Game
                </button>
            </Link>
        </React.Fragment>
    )
}

export default Home;
