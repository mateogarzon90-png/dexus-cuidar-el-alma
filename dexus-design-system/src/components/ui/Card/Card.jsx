import React from 'react';
import './Card.css';

const Card = ({ variant = 'normal', children }) => {
  // Generamos la clase dinámica basada en la variante elegida
  const className = `dexus-card dexus-card-${variant}`;

  return (
    <div className={className}>
      {/* Aquí es donde se inyectará el contenido */}
      {children}
    </div>
  );
};

export default Card; 