import { UrlObject } from 'url';
import type { Route } from '@molecules/navbar';
import Link from '@hoc/link';
import DropDownItem from '@atoms/drop-down-item';
import { MdArrowDropDown } from 'react-icons/md';

declare type Url = string | UrlObject;

interface NavItemProps {
    open?: boolean;
    title: string;
    link?: Url;
    submenu?: Array<Route | undefined>;
    toggleSubMenu?: () => void;
}

const NavItem = ({ open, link, title, submenu, toggleSubMenu }: NavItemProps) =>
    submenu ? (
        <div className="flex flex-col md:items-center  md:relative">
            <span className="inline-flex space-x-2  items-center">
                <Link
                    href={link as Url}
                    className="text-sm  cursor-pointer "
                    activeClassName="text-primaryColor font-bold"
                    key={title}
                >
                    <p className="">{title}</p>
                </Link>
                <div role="none" className="hover:cursor-pointer" onClick={toggleSubMenu}>
                    <MdArrowDropDown className="text-gray-300 text-lg" />
                </div>
            </span>

            <div
                className={`${
                    open ? 'h-[11.5rem] md:h-[13rem] mt-2' : 'h-0'
                } transition-all delay-150 ease-in-out overflow-hidden  space-y-2 md:space-y-3 md:drop-shadow-lg md:px-3  md:absolute  md:mt-0 md:top-[2rem] rounded-md bg-white w-[8rem]`}
            >
                {submenu.map((item) => (
                    <DropDownItem key={item?.title} link={item?.link} title={item?.title} />
                ))}
            </div>
        </div>
    ) : (
        <Link
            href={link as Url}
            className="text-sm cursor-pointer"
            activeClassName=" text-primaryColor font-bold "
            key={title}
        >
            <p className="">{title}</p>
        </Link>
    );

export default NavItem;
