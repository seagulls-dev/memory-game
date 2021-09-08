import React from 'react';
import { withRouter } from "react-router-dom";

const Header = props => {

    const { round } = props;

    return (
        <div>
            <h2>Round: {round}</h2>
            <button className="button button--warning text-center" onClick={() => props.history.push("/game")} disabled={round === 0}>Restart</button>
        </div>
    )

}

export default withRouter(Header)
