interface CallToActionBackDropProps {
    className?: string;
    children: React.ReactNode;
}
const CallToActionBackDrop = ({ className = '', children }: CallToActionBackDropProps) => {
    return (
        <div
            className={`h-[4rem] w-[29rem] flex items-center justify-between px-2 rounded-md shadow-2xl ${className}`}
        >
            <p className="font-thin text-gray-200">Become a member, register here</p>
            {children}
        </div>
    );
};

export default CallToActionBackDrop;
