/* eslint-disable no-unused-vars */
import SideBarItem from '@atoms/a-side-nav-item';
import uuid from '@lib/utils/uuid';

interface SideBarProps<T, Q> {
    data: T;
    handleChange: (node: Q, index: number) => void;
    currentIndex: number;
}

const SideBar = <T, Q>({ data, handleChange, currentIndex }: SideBarProps<T, Q>) => {
    return (
        <div className="bg-[#F3FAF9] min-w-[20rem] rounded-md">
            <ul className="pl-3 py-4 space-y-8 text-sm ">
                {data instanceof Array &&
                    data?.map((node: Q, index: number) => (
                        <SideBarItem
                            key={uuid}
                            handleChange={handleChange}
                            node={node}
                            index={index}
                            currentIndex={currentIndex}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default SideBar;
