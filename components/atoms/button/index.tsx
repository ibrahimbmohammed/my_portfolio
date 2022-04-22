interface ButtonProps {
    btnType?: 'primary' | 'secondary';
    label: string;
    type: 'button' | 'submit';
    className?: string;
}
const Button = ({ btnType = 'primary', label, type = 'button', className = '' }: ButtonProps) => {
    return (
        <button
            className={`h-[3rem] w-[11rem] ${
                btnType === 'primary' ? 'bg-primaryColor' : 'bg-secondaryColor'
            } text-secondaryText px-4 py-2 rounded-lg  ${className}`}
            type={type ? 'button' : 'submit'}
        >
            {label}
        </button>
    );
};

export default Button;
