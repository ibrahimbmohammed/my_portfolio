interface InnerHTMLProps {
    content: any;
    containerStyle: string;
    htmlStyle: string;
}

const InnerHTML = ({ content, containerStyle, htmlStyle }: InnerHTMLProps) => {
    function createMarkup() {
        return { __html: content };
    }
    return (
        <div className={containerStyle}>
            {content && (
                <div
                    className={`prose xs:prose-h1:text-primaryColor max-w-none prose-img:max-h-46 text-justify ${htmlStyle} `}
                    key={Math.random()}
                    dangerouslySetInnerHTML={createMarkup()}
                />
            )}
        </div>
    );
};

export default InnerHTML;
