/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GiRotaryPhone } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import Link from 'next/link';

function NavbarIcon({ icon, text = 'tool tip' }) {
    return (
        <div className="group">
            {icon}

            {/* <span className="sidebar-tooltip group-hover:scale-100">
        {text}
    </span> */}
        </div>
    );
}

function Navbar() {
    return (
        <div className=" top-navigation z-40 bg-transparent  w-screen h-16 flex flex-row items-center  justify-end pr-10 text-white shadow-lg">
            <a href="#">
                <NavbarIcon
                    icon={<AiFillHome size="26" className="top-navigation-icon rounded-full" />}
                />
            </a>
            <a href="#sectionFive">
                <NavbarIcon
                    icon={
                        <BsFillPersonFill size="28" className="top-navigation-icon rounded-full" />
                    }
                />
            </a>
            <a href="#sectionFive">
                <NavbarIcon
                    icon={<GiRotaryPhone size="32" className="top-navigation-icon rounded-full" />}
                />
            </a>
        </div>
    );
}

export default Navbar;
