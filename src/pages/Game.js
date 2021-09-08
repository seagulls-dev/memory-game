import React from 'react';
import { Link } from "react-router-dom";

import CardList from "../components/CardList";

import { connect } from "react-redux";

import { flipCard } from "../store/action";
import { restart } from "../store/action";

const Game = props => {

    const { memory, flipCard, restart } = props;

    return (
        <div className="text-center">
            <br/>
            <Link to="/">
                <button className="button button--success text-center">
                    Back to Home
                </button>
            </Link>
            <br/>
            <br/>
            <button className="button button--success" onClick={restart}>
                Restart
            </button>

            <CardList cards={memory.cards} flipCard={flipCard} />
            <br/>
            <Link to="/score">
                <button className="button button--success text-center">
                    Go to Score
                </button>
            </Link>
        </div>
    )
}


const mapStateToProps = (state) => ({
    memory: state.memory
});

export default connect(mapStateToProps, {flipCard, restart})(Game);
