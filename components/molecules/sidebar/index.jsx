/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

function Sidebar() {
    return (
        <div className="top-0 fixed  right-0 bg-transparent w-12 h-screen flex flex-col  justify-end text-white shadow-lg">
            <SideBarIcon icon={<BsLinkedin size="28" />} />
            <SideBarIcon icon={<BsGithub size="28" />} />
            <SideBarIcon icon={<BsTwitter size="28" />} />
            <SideBarIcon icon={<BsGrid3X3GapFill size="28" />} />
        </div>
    );
}

export default Sidebar;
