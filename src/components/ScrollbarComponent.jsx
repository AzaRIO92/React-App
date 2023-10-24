import React, { useState } from 'react';

const ScrollbarComponent = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const increaseScroll = () => {
    setScrollValue((prev) => Math.min(prev + 10, 100));
  };

  const decreaseScroll = () => {
    setScrollValue((prev) => Math.max(prev - 10, 0));
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setScrollValue(value);
    }
  };

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <div
        className="scroll-bar"
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#f1f1f1',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        <div
          className="scroll-filled"
          style={{
            width: `${scrollValue}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            borderRadius: '10px',
          }}
        ></div>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <button style={{ marginRight: '10px' }} onClick={decreaseScroll}>
          -10%
        </button>
        <input
          type="number"
          value={scrollValue}
          onChange={handleInputChange}
          style={{ width: '80px', marginRight: '10px', textAlign: 'center' }}
        />
        <button style={{ marginRight: '10px' }} onClick={increaseScroll}>
          +10%
        </button>
      </div>
    </div>
  );
};

export default ScrollbarComponent;





