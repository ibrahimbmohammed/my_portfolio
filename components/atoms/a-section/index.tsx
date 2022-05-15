interface SectionProps {
    className: string;
    style?: React.CSSProperties;
    children: React.ReactChild[] | React.ReactChild;
}

function Section({ className, style, children }: SectionProps) {
    return (
        <section style={style} className={className}>
            {children}
        </section>
    );
}

export default Section;
