import SideBarItem from '@atoms/a-side-nav-item-about';
import uuid from '@lib/utils/uuid';

interface SideNavBarProps {
    currentIndex: any;
    storeData: any;
    handleAbout: any;
}

const SideNavBar = ({ currentIndex, storeData, handleAbout }: SideNavBarProps) => {
    return (
        <div className="bg-[#F3FAF9] min-w-[20rem] rounded-md">
            <ul className="pl-3 py-4 space-y-8 text-sm ">
                {storeData.map((item: any, index: any) => (
                    <SideBarItem
                        key={uuid}
                        currentIndex={currentIndex}
                        index={index}
                        item={item}
                        handleAbout={handleAbout}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SideNavBar;
