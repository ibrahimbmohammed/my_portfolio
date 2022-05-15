interface AboutUiLayoutProps {
    headText: string;
    subText: string;
    className: string;
    children: React.ReactNode | React.ReactNode[];
}

const AboutUiLayout = ({ headText, subText, className, children }: AboutUiLayoutProps) => {
    return (
        <section className="flex flex-col">
            <div className="px-12 py-8">
                <p className="font-extrabold">{headText}</p>
                <p className="text-primaryColor font-semibold text-2xl">{subText}</p>
            </div>
            <div className={`flex space-x-6 items-start justify-between px-12 ${className}`}>
                {children}
            </div>
        </section>
    );
};

export default AboutUiLayout;
