interface SideBarItemProps {
    index: number;
    currentIndex: number;
    handleChange: any;
    node: any;
}

const SideBarItem = ({ index, currentIndex, handleChange, node }: SideBarItemProps) => {
    const styleState = currentIndex === index;
    return (
        <button
            type="button"
            onClick={() => handleChange(node, index)}
            onKeyDown={() => handleChange(node, index)}
            className={`flex items-center  h-[6.37rem] md:h-[2.37rem] mb-0 md:mb-4 w-full text-primaryText transition-all delay-200 text-md cursor-pointer
        ${
            styleState === true
                ? 'font-bold  border-b-4 md:border-l-4 md:border-b-0  border-primaryColor pl-3 md:pl-2'
                : '  '
        }`}
        >
            {node?.node?.name}
        </button>
    );
};

export default SideBarItem;
