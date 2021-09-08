import React from 'react';
import { Link } from "react-router-dom";


import Header from "../components/Header";
import CardList from "../components/CardList";

import { connect } from "react-redux";

import { flipCard } from "../store/action";
import { restart } from "../store/action";

const Game = props => {

    const { memory, flipCard, restart } = props;

    return (
        <div>
            <Link to="/">
                <button className="button button--success text-center">
                    Back to Home
                </button>
            </Link>

            <Header round={memory.round} restart={restart}/>
            <CardList cards={memory.cards} flipCard={flipCard} />
        </div>
    )

}


const mapStateToProps = (state) => ({
    memory: state.memory
});

export default connect(mapStateToProps, {flipCard, restart})(Game);
