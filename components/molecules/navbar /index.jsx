/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GiRotaryPhone } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

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
        <div className=" top-navigation z-40 bg-transparent  w-screen h-16 flex flex-row items-center  justify-end text-white shadow-lg">
            <NavbarIcon
                icon={<AiFillHome size="26" className="top-navigation-icon rounded-full" />}
            />
            <NavbarIcon
                icon={<BsFillPersonFill size="28" className="top-navigation-icon rounded-full" />}
            />
            <NavbarIcon
                icon={<GiRotaryPhone size="32" className="top-navigation-icon rounded-full" />}
            />
        </div>
    );
}

export default Navbar;
