import React from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { restart } from "../store/action";


const Score = props => {

    const { memory } = props;
    return (
        <React.Fragment>
            <Link to="/">
                <button className="button button--success text-center">
                    Back to Home
                </button>
            </Link>
            <br/>
            <Header round={memory.round} restart={restart}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    memory: state.memory
});

export default connect(mapStateToProps, {restart})(Score);
