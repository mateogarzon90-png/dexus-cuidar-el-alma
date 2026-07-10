import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'info' }) => {
  return (
    <span className={`dexus-badge dexus-badge-${variant}`}>
      {children}
    </span>
  );
};

export default Badge;