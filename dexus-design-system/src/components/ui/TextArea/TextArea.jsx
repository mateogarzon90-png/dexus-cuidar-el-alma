import React, { useId, useRef, useEffect } from 'react';
import './TextArea.css';

const TextArea = ({ 
  label, 
  name,
  value = '', 
  onChange,
  placeholder, 
  maxLength, 
  disabled = false, 
  error 
}) => {
  const textareaId = useId();
  const textareaRef = useRef(null);

  // Mantenemos la genial idea de Thais: Auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className="dexus-textarea-field"
        rows={3}
      />

      {/* Footer para organizar el mensaje de error y el contador */}
      <div className="dexus-textarea-footer">
        {error ? (
          <span className="dexus-textarea-error-msg">{error}</span>
        ) : <span />} {/* Span vacío para mantener el contador a la derecha */}
        
        {maxLength && (
          <span className="dexus-textarea-counter">
            {value?.length || 0} / {maxLength}
          </span>
        )}
      </div>

    </div>
  );
};

export default TextArea;