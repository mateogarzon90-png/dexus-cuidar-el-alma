import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 'md' }) => {
  return (
    <div className={`dexus-spinner-wrapper`}>
      <div className={`dexus-spinner dexus-spinner-${size}`}></div>
    </div>
  );
};

export default Spinner;