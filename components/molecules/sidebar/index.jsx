/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from '@lib/hoc/link';

import { BsLinkedin, BsGithub, BsTwitter, BsGrid3X3GapFill } from 'react-icons/bs';

function SideBarIcon({ icon, text = '' }) {
    return (
        <div className="sidebar-icon group">
            {icon}
            {/*
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span> */}
        </div>
    );
}
const NavigationDots = ({ active }) => (
    <div className="">
        {['', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
        ))}
    </div>
);

function Sidebar() {
    return (
        <div className="top-0 fixed z-50 right-0 bg-transparent w-12 h-screen flex flex-col  justify-end text-white shadow-lg">
            <SideBarIcon icon={<BsLinkedin size="28" />} />
            <SideBarIcon icon={<BsGithub size="28" />} />
            <SideBarIcon icon={<BsTwitter size="28" />} />
            <SideBarIcon icon={<BsGrid3X3GapFill size="28" />} />
        </div>
    );
}

export default Sidebar;
