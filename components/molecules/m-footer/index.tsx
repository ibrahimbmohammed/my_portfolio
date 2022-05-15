import Image from '@hoc/next-base-image';
import Link from '@hoc/link';
import { IoLocationSharp } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';
import { RiArrowRightSFill } from 'react-icons/ri';
import { BsFacebook, BsTelephoneFill, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import FooterStyleImage from '@assets/png/footer-style.png';
import EdgeImage from '@assets/svg/edge-styles.svg';

function Footer() {
    return (
        <footer className="relative bg-primaryColor flex flex-col min-h-[calc(100vh_-_23rem)] ">
            <div className="flex flex-col md:flex-row items-start justify-between py-[4rem]">
                <div className="md:max-w-[32rem]">
                    <p className="text-secondaryText font-light leading-8">
                        The NIWE serves as a continental platform to galvanise the Engineers in
                        African towards fostering lasting sustainable development in all sector and
                        at all levels, building on, and working with, existing engineering network
                    </p>
                </div>

                <div className="flex space-x-4 md:mr-[12rem]">
                    <div className="">
                        <p className="font-semibold text-secondaryText">Get in Touch</p>
                        <ul className="space-y-3 mt-3">
                            <li className="flex items-center space-x-4">
                                <IoLocationSharp />
                                <p className="text-secondaryText font-light ">
                                    No 5, Novare Mall, Shoprite
                                </p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <BsTelephoneFill />
                                <p className="text-secondaryText font-light ">+234 81 666 555 77</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <HiMail />
                                <p className="text-secondaryText font-light ">
                                    niwe@peddlesoft.com
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="font-semibold text-secondaryText">Quick Lines</p>
                        <ul className="space-y-3 mt-3">
                            <li className="flex items-center space-x-4">
                                <RiArrowRightSFill />
                                <p className="text-secondaryText font-light ">Why NIWE</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <RiArrowRightSFill />
                                <p className="text-secondaryText font-light ">Vision</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <RiArrowRightSFill />
                                <p className="text-secondaryText font-light ">Values</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <RiArrowRightSFill />
                                <p className="text-secondaryText font-light ">Gallery</p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <RiArrowRightSFill />
                                <p className="text-secondaryText font-light ">Register</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center space-x-4 pb-5">
                    <Link href="/#">
                        <span className=" hover:cursor-pointer">
                            <BsFacebook className="text-secondaryText text-2xl" />
                        </span>
                    </Link>
                    <Link href="/#">
                        <span className=" hover:cursor-pointer">
                            <FaTwitter className="text-secondaryText text-2xl" />
                        </span>
                    </Link>
                    <Link href="/#">
                        <span className=" hover:cursor-pointer">
                            <BsLinkedin className="text-secondaryText text-2xl" />
                        </span>
                    </Link>
                    <Link href="/#">
                        <span className=" hover:cursor-pointer">
                            <BsTelegram className="text-secondaryText text-2xl" />
                        </span>
                    </Link>
                </div>
                <hr />
                <div className="mt-3">
                    <p className="font-light text-secondaryText text-sm">
                        © 2021, NIWE | All Rights Reserved{' '}
                    </p>
                </div>
            </div>
            <div className="absolute right-0">
                <Image
                    className=""
                    src={FooterStyleImage.src}
                    layout="fixed"
                    height={150}
                    width={150}
                />
            </div>
            <div className="absolute left-0 bottom-0">
                <Image className="" src={EdgeImage.src} layout="fixed" height={80} width={100} />
            </div>
        </footer>
    );
}

export default Footer;
