// TextArea.jsx
// Autor: Thais
// Componente: TextArea reutilizable con AutoResize y contador de caracteres
// Props: label, placeholder, maxLength, disabled, error

import { useState, useRef, useEffect } from 'react'
import './TextArea.css'

function TextArea({ 
  label, 
  placeholder, 
  maxLength, 
  disabled = false, 
  error 
}) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [value])

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="dexus-textarea-wrapper">

      {label && (
        <label className="dexus-textarea-label">{label}</label>
      )}

      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={`dexus-textarea ${error ? 'dexus-textarea-error' : ''}`}
        rows={3}
      />

      <div className="dexus-textarea-footer">
        {error && (
          <span className="dexus-textarea-error-msg">{error}</span>
        )}
        {maxLength && (
          <span className="dexus-textarea-counter">
            {value.length} / {maxLength}
          </span>
        )}
      </div>

    </div>
  )
}

export default TextArea