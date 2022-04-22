// import logo from '@assets/png/logo.png';
import Image from 'next/image';

interface NavBarProps {
    className?: string;
    children?: JSX.Element;
}
const onlineImg = 'https://www.pngall.com/wp-content/uploads/2016/03/Batman-Logo-PNG.png';
const NavBar = ({ className = '', children }: NavBarProps) => {
    return (
        <nav className="w-full h-14 shadow-sm ">
            <div className="main flex items-center justify-between">
                <div className="flex items-center justify-center space-x-8">
                    <div className="logo border">
                        <Image width={60} height={50} src={onlineImg} />
                    </div>
                    <div className="space-x-4">
                        <span className="">home</span>
                        <span className="">about</span>
                        <span className="">library</span>
                        <span className="">training</span>
                    </div>
                </div>
                <div className="space-x-3">
                    <span className={className}>login</span>
                    <span className="">register</span>
                    {children}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
