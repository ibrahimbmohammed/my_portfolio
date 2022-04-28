interface TransitionProp {
    show: boolean;
    height?:
        | 'h-106'
        | 'h-104'
        | 'h-96'
        | 'h-80'
        | 'h-72'
        | 'h-64'
        | 'h-60'
        | 'h-56'
        | 'h-48'
        | 'h-40'
        | 'h-32'
        | 'h-24'
        | 'h-12';
    children: React.ReactNode;
}

function Transition({ show = false, height = 'h-40', children }: TransitionProp) {
    return (
        <div
            className={`${
                show === false ? 'h-0' : `translate-y-2  ${height} `
            } overflow-hidden  md:hidden block md:shadow-lg rounded-3xl transform transition-all duration-150 ease-in-out  `}
        >
            {children}
        </div>
    );
}

export default Transition;
