import React, { useId, useRef, useEffect, useState } from 'react';
import './TextArea.css';

const TextArea = ({ 
  label, 
  name,
  value: externalValue, // El valor que viene del padre (si existe)
  onChange,             // La función del padre (si existe)
  placeholder, 
  maxLength, 
  disabled = false, 
  error 
}) => {
  const textareaId = useId();
  const textareaRef = useRef(null);

  // 1. MEMORIA INTERNA: Por si el componente padre no nos controla
  const [internalValue, setInternalValue] = useState(externalValue || '');

  // 2. DECISIÓN: ¿Usamos el valor del padre o el nuestro?
  // Si externalValue existe (no es undefined), somos controlados. Si no, somos libres.
  const currentValue = externalValue !== undefined ? externalValue : internalValue;

  // Efecto del Auto-resize de Thais (ahora usando currentValue)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [currentValue]);

  // 3. MANEJADOR DE CAMBIOS: Actualizamos nuestra memoria y avisamos al padre
  const handleChange = (e) => {
    setInternalValue(e.target.value); // Guardamos internamente
    if (onChange) {
      onChange(e); // Avisamos al padre (por si está escuchando)
    }
  };

  return (
    <div className={`dexus-textarea-wrapper ${error ? 'dexus-textarea-has-error' : ''}`}>
      
      {label && (
        <label htmlFor={textareaId} className="dexus-textarea-label">
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        ref={textareaRef}
        name={name}
        value={currentValue} /* Usamos el valor decidido en el paso 2 */
        onChange={handleChange} /* Usamos nuestra función híbrida */
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className="dexus-textarea-field"
        rows={3}
      />

      <div className="dexus-textarea-footer">
        {error ? (
          <span className="dexus-textarea-error-msg">{error}</span>
        ) : <span />}
        
        {maxLength && (
          <span className="dexus-textarea-counter">
            {currentValue?.length || 0} / {maxLength}
          </span>
        )}
      </div>

    </div>
  );
};

export default TextArea;