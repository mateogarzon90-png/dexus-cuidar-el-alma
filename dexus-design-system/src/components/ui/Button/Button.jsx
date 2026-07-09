// Button.jsx
// Autor: Thais
// Componente: Button reutilizable
// Props: variant, disabled, onClick, children

import './Button.css'

function Button({ variant = 'primary', disabled = false, onClick, children }) {
  return (
    <button
      className={`dexus-btn dexus-btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button