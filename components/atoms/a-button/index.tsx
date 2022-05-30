/* eslint-disable no-unused-vars */

interface ButtonProps {
    label: string;
    type: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
    label,
    type = 'button',
    disabled = false,
    className = '',
    handleClick,
}: ButtonProps) => {
    return (
        <button
            className={`h-[3rem] w-[11rem] text-black px-4 py-2 rounded-lg  ${className}`}
            type={type ? 'button' : 'submit'}
            disabled={disabled}
            onClick={(e) => handleClick && handleClick(e)}
        >
            {label}
        </button>
    );
};

export default Button;
