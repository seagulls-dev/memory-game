import React from 'react';
import classNames from 'classnames';

const CardListItem = props => {

    const { card, flipCard } = props;

    const cardClass = classNames({
        'flipper' : true,
        'flipped' : card.flipped || card.discovered
    });

    return (
        <li className="flip-container">
            <div className={cardClass}>
                <div className="front" onClick={() => flipCard(card.id)}></div>
                <div className="back">
                    <img src={card.url} />
                </div>
            </div>
        </li>
    )

}

export default CardListItem;
