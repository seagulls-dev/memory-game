import React from 'react';

import CardListItem from './CardListItem';

const CardList = props => {

    const { cards, flipCard } = props;

    return (
        <ul className="cards">
            {
                cards.map(card =>
                    <CardListItem
                        key={card.id}
                        card={card}
                        flipCard={flipCard}
                    />
                )
            }
        </ul>
    )

}

export default CardList;
