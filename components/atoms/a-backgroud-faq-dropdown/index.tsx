interface FaqBackgroudWrapperProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}
const FaqBackgroudWrapper = ({ className, children }: FaqBackgroudWrapperProps) => {
    return (
        <div className={`bg-[#F3FAF9] rounded-lg min-h-[24rem] w-[34rem] ${className}`}>
            {children}
        </div>
    );
};

export default FaqBackgroudWrapper;
