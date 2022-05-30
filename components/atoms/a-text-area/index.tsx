/* eslint-disable no-unused-vars */
import React from 'react';

export interface InputProp {
    id?: string;
    name: string;
    placeholder?: string;
    className: string;
    value: string;
    required?: boolean;
    rows?: number | undefined;
    cols?: number | undefined;
    error?: string;
    maxLength?: number;
    handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

function Input({
    id,
    name,
    placeholder,
    className,
    required,
    rows,
    cols,
    value,
    error,
    maxLength,
    handleChange,
    handleFocus,
}: InputProp) {
    return (
        <>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                className={className}
                required={required}
                rows={rows}
                cols={cols}
                value={value}
                maxLength={maxLength}
                onChange={(e) => handleChange && handleChange(e)}
                onFocus={(e) => handleFocus && handleFocus(e)}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </>
    );
}

export default Input;
