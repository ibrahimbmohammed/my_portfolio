import useWindowSize from '@lib/hooks/screen-size';

interface SideBarItemProps {
    index: number;
    currentIndex: number;
    item: string;
    handleAbout: any;
}

const SideBarItem = ({ index, currentIndex, item, handleAbout }: SideBarItemProps) => {
    const size = useWindowSize();
    const paragraph = item;
    const styleState = currentIndex === index;
    const dimensionState = size.width && size.width >= 768;
    // console.log('item', paragraph.split('</h1>')[0].replace('<h1>', ''));
    return (
        <button
            type="button"
            onClick={() => handleAbout(paragraph, index)}
            className={`flex items-center  h-[6.37rem] md:h-[2.37rem] mb-0 md:mb-4 w-full text-primaryText transition-all delay-200 text-md cursor-pointer ${
                dimensionState === true ? ' ' : 'truncate'
            }  ${
                styleState === true
                    ? 'font-bold  border-b-4 md:border-l-4 md:border-b-0  border-primaryColor pl-2'
                    : '  '
            }`}
        >
            {dimensionState
                ? item.split('</h1>')[0].replace('<h1>', '')
                : item.split('</h1>')[0].replace('<h1>', '').substr(0, 12).concat('...')}
        </button>
    );
};

export default SideBarItem;
