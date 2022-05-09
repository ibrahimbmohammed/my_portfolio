interface ButtonProps {
    btnType?: 'primary' | 'secondary';
    label?: string;
    type: 'button' | 'submit';
    className?: string;
    onClick?: () => void;
}
const Button = ({
    btnType = 'primary',
    label,
    type = 'button',
    className = '',
    onClick,
}: ButtonProps) => {
    if (onClick) onClick();
    return (
        <button
            className={`h-[3rem] w-[11rem] ${
                btnType === 'primary'
                    ? 'bg-primaryColor text-secondaryText'
                    : 'bg-secondaryColor text-primaryText'
            }  px-4 py-2 rounded-lg  ${className}`}
            type={type ? 'button' : 'submit'}
        >
            {label}
        </button>
    );
};

export default Button;
