import './Button.css';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children 
}) => { const className = `dexus-btn dexus-btn-${variant} dexus-btn-${size}`;

  return (
    <button 
      className={className} 
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;