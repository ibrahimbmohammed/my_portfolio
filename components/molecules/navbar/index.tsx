import { useState } from 'react';
import Transition from '@hoc/transition-wrapper';
// import logo from '@assets/png/logo.png';
import NavbarItem from '@atoms/nav-item';
import { UrlObject } from 'url';

interface NavBarProps {
    className?: string;
}

declare type Url = string | UrlObject;

export interface Route {
    title: string;
    link: Url;
    submenu?: Array<Route | undefined>;
}

// const onlineImg = 'https://www.pngall.com/wp-content/uploads/2016/03/Batman-Logo-PNG.png';

const routesItems: Route[] = [
    { title: 'Home', link: '/' },
    {
        title: 'About',
        link: '/about',
        submenu: [
            { title: 'Who We Are', link: '/about' },
            { title: 'Leadership', link: '/leadership' },
            { title: 'Chapters', link: '/chapters' },
            { title: 'Events', link: '/events' },
            { title: 'Publications', link: '/publications' },
            { title: 'FAQ', link: '/faq' },
        ],
    },
    { title: 'Library', link: '/publications' },
    { title: 'Training', link: `/training` },
    { title: 'Contact Us', link: '/contact_us' },
    { title: 'Login', link: `/login` },
    { title: 'Register', link: '/register' },
];

function Navbar({ className }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubOpen(!isSubOpen);
    };
    return (
        <nav
            className={`shadow-none md:shadow-sm drop-shadow-xl  sticky sm:top-0 bg-white w-full z-20 ${className}`}
        >
            <div className="w-full">
                <div className="flex flex-col space-y-2 md:space-y-0  md:flex-row items-center h-20 w-full">
                    <div className="flex items-center space-x-[10rem]   mx-20   w-full">
                        <div className="flex justify-center items-center flex-shrink-0 w-full md:w-auto borde ">
                            <h1 className="  font-bold text-xl cursor-pointer">
                                Stream<span className="text-blue-500">line</span>
                            </h1>
                        </div>
                        <div className="hidden md:block w-full ">
                            <div className=" flex items-center justify-between w-full">
                                <div className="flex space-x-14 ">
                                    {routesItems.map((item: Route) => {
                                        if (item.title === 'Login' || item.title === 'Register')
                                            return null;
                                        return (
                                            <NavbarItem
                                                key={item.title}
                                                link={item.link}
                                                title={item.title}
                                                submenu={item.submenu}
                                                open={isSubOpen}
                                                toggleSubMenu={toggleSubMenu}
                                            />
                                        );
                                    })}
                                </div>

                                <div className="flex space-x-14 ">
                                    {routesItems.map((item: Route) => {
                                        if (item.title === 'Login' || item.title === 'Register') {
                                            return (
                                                <NavbarItem
                                                    key={item.title}
                                                    link={item.link}
                                                    title={item.title}
                                                    submenu={item.submenu}
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ml-2 self-start flex md:hidden  rounded-lg ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400   focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition show={isOpen} height={isSubOpen ? 'h-106' : 'h-60'}>
                <div className="md:hidden">
                    <div className="bg-white px-2 pt-2 pb-3 space-y-3 sm:px-3">
                        {routesItems.map((item: Route) => {
                            return (
                                <NavbarItem
                                    key={item.title}
                                    link={item.link}
                                    title={item.title}
                                    submenu={item.submenu}
                                    open={isSubOpen}
                                    toggleSubMenu={toggleSubMenu}
                                />
                            );
                        })}
                    </div>
                </div>
            </Transition>
        </nav>
    );
}

export default Navbar;
