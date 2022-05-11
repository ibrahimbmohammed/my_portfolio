/* eslint-disable no-unused-vars */
interface ButtonProps {
    btnType?: 'primary' | 'secondary';
    label?: string;
    type: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
    btnType = 'primary',
    label,
    type = 'button',
    disabled = false,
    className = '',
    handleClick,
}: ButtonProps) => {
    return (
        <button
            className={`h-[3rem] w-[11rem] ${
                btnType === 'primary'
                    ? 'bg-primaryColor text-secondaryText'
                    : 'bg-secondaryColor text-primaryText'
            }  px-4 py-2 rounded-lg  ${className}`}
            type={type ? 'button' : 'submit'}
            disabled={disabled}
            onClick={(e) => handleClick && handleClick(e)}
        >
            {label}
        </button>
    );
};

export default Button;
