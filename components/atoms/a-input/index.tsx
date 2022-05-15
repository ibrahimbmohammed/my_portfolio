/* eslint-disable no-unused-vars */
import React from 'react';

export interface InputProp {
    id?: string;
    type: string;
    name: string;
    placeholder?: string;
    className: string;
    value: string;
    required: boolean;
    error?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
    id,
    type,
    name,
    placeholder,
    className,
    required,
    value,
    error,
    handleChange,
}: InputProp) {
    return (
        <>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                required={required}
                value={value}
                onChange={(e) => handleChange && handleChange(e)}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </>
    );
}

export default Input;
