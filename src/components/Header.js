import React from 'react';

const Header = props => {

    const { restart, round } = props;

    return (
        <div>
            <h2>Round: {round}</h2>
            <button className="button button--warning text-center" onClick={() => restart()} disabled={round === 0}>Restart</button>
        </div>
    )

}

export default Header
