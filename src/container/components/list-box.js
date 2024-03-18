// ListBox.js

import React from 'react';

const ListBox = ({ id, status, heading, text, conversionRate, date, isSelected, handleBoxClick }) => {
  return (
    <div className={`list-box ${isSelected ? 'clicked' : ''}`} onClick={() => handleBoxClick(id)}>
      <div className='status' style={{ backgroundColor: status.color, color: status.textColor, position: 'absolute', top: '15px', right: '10px' }}>
        {status.text}
      </div>
      <div className='box-heading'>
        {heading}
      </div>
      <div className='box-text'>
        {text}
      </div>
      <div className='box-details'>
        <div className='conversion'>
          Conversion Rate: <span className='conversion-rate' style={{ color: conversionRate.color }}>{conversionRate.value} {conversionRate.icon && <img src={conversionRate.icon} alt="conversion icon" />}</span>
        </div>
        <div className='box-date'>
          {date}
        </div>
      </div>
    </div>
  );
};

export default ListBox;
