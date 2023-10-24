import React, { useState } from 'react';

const TextComponent = ({ texts }) => {
  const [selectedText, setSelectedText] = useState(null);
  

  const toggleText = (index) => {
    setSelectedText((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {texts.map((text, index) => (
        <div key={index}>
          <button onClick={() => toggleText(index)}>
            {selectedText === index ? 'Скрыть текст' : 'Показать текст'}
          </button>
          {selectedText === index && <div>{text}</div>}
        </div>
      ))}
    </div>
  );
};

export default TextComponent;
