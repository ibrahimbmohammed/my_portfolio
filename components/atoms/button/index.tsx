interface ButtonProps {
    btnType?: 'primary' | 'secondary';
    label: string;
    type: 'button' | 'submit';
}
const Button = ({ btnType = 'primary', label, type = 'button' }: ButtonProps) => {
    return (
        <button
            className={`h-[3rem] w-[11rem] ${
                btnType === 'primary' ? 'bg-primaryColor' : 'bg-secondaryColor'
            } text-white px-4 py-2 rounded-sm`}
            type={type ? 'button' : 'submit'}
        >
            {label}
        </button>
    );
};

export default Button;
