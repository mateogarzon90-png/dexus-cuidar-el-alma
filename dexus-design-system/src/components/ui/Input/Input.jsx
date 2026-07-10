import React, { useId } from 'react';
import './Input.css';

const Input = ({ 
    label, 
    type = 'text', 
    name,          /* AÑADIDO: Importante para formularios */
    value,         /* AÑADIDO: Para controlar el valor */
    onChange,      /* AÑADIDO: Para capturar cuando el niño escribe */
    placeholder, 
    required, 
    disabled, 
    error 
}) => {
    const inputId = useId();

    return (
        // AÑADIDO: Prefijo dexus- para mantener tu consistencia
        <div className={`dexus-input-container ${error ? 'dexus-input-has-error' : ''}`}>
            {label && (
                <label htmlFor={inputId} className="dexus-input-label">
                    {label}
                    {required && <span className="dexus-input-asterisk"> *</span>}
                </label>
            )}

            <input
                id={inputId}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className="dexus-input-field"
            />

            {error && <p className="dexus-input-error-message">{error}</p>}
        </div>
    );
};

export default Input;