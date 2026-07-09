// Input.jsx
// Autor: Thais
// Componente: Input reutilizable
// Props: type, label, placeholder, error, disabled, icon

import './Input.css'

function Input({ 
  type = 'text', 
  label, 
  placeholder, 
  error, 
  disabled = false, 
  icon 
}) {
  return (
    <div className="dexus-input-wrapper">

      {label && (
        <label className="dexus-input-label">
          {label}
        </label>
      )}

      <div className="dexus-input-container">
        {icon && (
          <span className="dexus-input-icon">{icon}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`dexus-input ${error ? 'dexus-input-error' : ''} ${icon ? 'dexus-input-with-icon' : ''}`}
        />
      </div>

      {error && (
        <span className="dexus-input-error-msg">{error}</span>
      )}

    </div>
  )
}

export default Input