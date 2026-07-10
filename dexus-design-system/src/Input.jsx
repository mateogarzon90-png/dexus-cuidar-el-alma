import React, { useId } from 'react';
import './Input.css';

const Input = ({ label, type = 'text', placeholder, required, disabled, error }) => {
    const inputId = useId();

    return (
        <div className={`input-container ${error ? 'has-error' : ''}`}>
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {required && <span className="asterisk"> *</span>}
                </label>
            )}

            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className="input-field"
            />

            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Input;