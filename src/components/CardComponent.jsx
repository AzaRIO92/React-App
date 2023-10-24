import React, { useState } from 'react';
import './Card.css';

const Card = ({ cards }) => {
  const [visibleCards, setVisibleCards] = useState(2);

  const loadMoreCards = () => {
    setVisibleCards(prev => Math.min(prev + 2, cards.length));
  };

  const renderedCards = cards.slice(0, visibleCards).map(card => (
    <div className="card" key={card.id}>
      {card.text}
    </div>
  ));

  const showMoreButton = visibleCards < cards.length && (
    <button className="show-more-button" onClick={loadMoreCards}>
      Показать ещё
    </button>
  );

  return <div className="card-container">{renderedCards}{showMoreButton}</div>;
};

export default Card;


