import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? 'active' : ''}
          style={{
            border: '1px solid #ddd',
            padding: '5px 10px',
            margin: '0 5px',
            cursor: 'pointer',
            backgroundColor: i === currentPage ? '#4CAF50' : '#fff',
            color: i === currentPage ? '#fff' : '#000',
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {currentPage !== 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          style={{
            border: '1px solid #ddd',
            padding: '5px 10px',
            margin: '0 5px',
            cursor: 'pointer',
          }}
        >
          Назад
        </button>
      )}
      {renderPaginationButtons()}
      {currentPage !== totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          style={{
            border: '1px solid #ddd',
            padding: '5px 10px',
            margin: '0 5px',
            cursor: 'pointer',
          }}
        >
          Вперед
        </button>
      )}
    </div>
  );
};

export default PaginationComponent;

