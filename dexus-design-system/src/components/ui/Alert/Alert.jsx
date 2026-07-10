import React from 'react';
import './Alert.css';

const Alert = ({ title, children, type = 'information' }) => {
  // Asignamos un emoji según el tipo de alerta
  const icons = {
    information: '💡',
    success: '✨',
    warning: '⚠️',
    error: '🚨'
  };

  return (
    <div className={`dexus-alert dexus-alert-${type}`}>
      <div className="dexus-alert-icon">{icons[type]}</div>
      <div className="dexus-alert-content">
        {title && <h4 className="dexus-alert-title">{title}</h4>}
        <div className="dexus-alert-message">{children}</div>
      </div>
    </div>
  );
};

export default Alert;