import React, { useState } from 'react';


const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value === rating ? 0 : value);
  };

  const renderRating = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className="star"
          onClick={() => handleRatingClick(i)}
          style={{ fontSize: '32px', color: i <= rating ? 'blue' : 'black', cursor: 'pointer' }}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      <h2>Rating Component</h2>
      {renderRating()}
    </div>
  );
};

export default RatingComponent;


