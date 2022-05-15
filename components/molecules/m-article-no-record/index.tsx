interface NoRecodFoundProps {
    text: string;
    className?: string;
}

const NoRecodFound = ({ text, className }: NoRecodFoundProps) => {
    return (
        <div className={`w-full h-full pb-6 ${className}`}>
            <div className=" h-screen bg-slate-50  flex items-center justify-center">
                <p className=" text-center text-2xl">{text}</p>
            </div>
        </div>
    );
};

export default NoRecodFound;
