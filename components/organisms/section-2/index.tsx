/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import me from '@assets/png/remove.png';
import post from '@assets/svg/post.svg';
import svg1 from '@assets/svg/svg1.svg';
import svg2 from '@assets/svg/svg2.svg';
import svg3 from '@assets/svg/svg3.svg';
import svg4 from '@assets/svg/svg4.svg';
import svg5 from '@assets/svg/svg5.svg';
import svg6 from '@assets/svg/svg6.svg';
import svg7 from '@assets/svg/svg7.svg';
import svg8 from '@assets/svg/svg8.svg';
import svg9 from '@assets/svg/svg9.svg';
import svg10 from '@assets/svg/svg10.svg';
import svg11 from '@assets/svg/svg11.svg';
import svg12 from '@assets/svg/svg12.svg';
import svg13 from '@assets/svg/svg13.svg';
import svg14 from '@assets/svg/svg14.svg';
import svg15 from '@assets/svg/svg15.svg';
import svg16 from '@assets/svg/reactn.svg';
import svg17 from '@assets/svg/rust.svg';
import svg18 from '@assets/svg/docker.svg';
import downloadSvg from '@assets/svg/download.svg';
import workSvg from '@assets/svg/brief.svg';
import educationSvg from '@assets/svg/education.svg';
// import pdf from '../../../public/assets/pdf/cv.pdf';

import typescript from '@assets/svg/typescript.svg';
import javascript from '@assets/svg/javascript.svg';
import Image from 'next/image';

function SectionTwo() {
    return (
        <section
            id="sectionTwo"
            className="sect font-theme h-fit  xl:h-[calc(100vh_+_4rem)] 3xl:h-screen pb-6 relative flex justify-evenly overflow-hidden px-4"
        >
            <div className="inline-block w-72 h-72   moon-bg rounded-full absolute -bottom-50 -right-8" />
            <span className="sm:inline-block hidden  absolute -top-[6rem] right-[3rem]">
                <h1 className="font-extrabold  font-fans self-center mx-auto text-transparent text-2xl xl:text-6xl md:text-4xl bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 mt-40 md:mt-32 md:ml-16">
                    ABOUT
                </h1>
            </span>
            <div className="pl-[0] md:pl-[3rem]  w-full flex flex-col space-y-2 ">
                <div className="w-full   flex flex-col  items-center justify-center lg:items-start lg:justify-start space-y-8 ">
                    <div className="flex space-y-4 lg:space-y-0  flex-col lg:flex-row items-center lg:items-end justify-between space-x-0 lg:space-x-4">
                        <div className="overflow-hidden w-fit bg-slate-800 rounded-xl px-4 pb-12   mt-8 h-[10rem]">
                            <Image src={me} width="190" height="210" />
                        </div>
                        <div className="bio w-[18rem] lg:w-[34rem] font-theme font-light">
                            <p className="text-justify leading-tight">
                                Hello, i’m Mohammed Ibrahim B , a software Engineer with a knack for
                                cybersecurity, my prime motivation is excellence and to excel at any
                                task. I have an inquisitive mind, thus always seeking new adventures
                                and challenges. I&rsquo;m not interested in only developing IT
                                solutions, but rather developing safe IT solutions that are imbued
                                with cyber security consciousness in both the design and
                                implementation.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-0 lg:space-x-3 space-y-4 lg:space-y-0">
                        <div className="h-[12rem] w-[16rem] bg-[#141414] flex flex-col space-y-3 border border-gray-800 rounded-md px-8 pt-2">
                            <div className=" rounded-md px-1 pt-[0.5rem] w-fit">
                                <Image src={educationSvg} width={35} height={30} />
                            </div>
                            <p className="font-semibold text-xs">Education</p>
                            <span className="flex space-x-2 items-center font-normal text-xs  ">
                                <p className="font-semibold text-[0.7rem]">Post Grad</p> <b>:</b>
                                <p>Msc, Cyber Security</p>
                            </span>
                            <span className="flex space-x-2 items-center font-normal text-xs ">
                                <p className="break-normal font-semibold text-[0.7rem]">
                                    Under Grad
                                </p>
                                <b>:</b>
                                <p className="">Bsc, Electrical Engineering</p>
                            </span>
                        </div>
                        <div className="h-[12rem] w-[16rem] bg-[#141414] flex flex-col space-y-3 border border-gray-800 rounded-md px-8 pt-2">
                            <div className="rounded-md px-1 pt-[0.5rem] w-fit">
                                <Image src={workSvg} width={35} height={30} />
                            </div>
                            <p className="font-semibold  text-xs">Curriculum Vitae</p>
                            <span className=" h-full flex items-center justify-center">
                                <a
                                    href="https://docs.google.com/document/d/1udoAt9Y-84un0GfeapTxyuF_xJH1GlPrgoUJA_ZWrB0/edit?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer"
                                >
                                    <Image src={downloadSvg} width={35} height={30} />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col space-y-2">
                            <span className="self-center lg:self-start">
                                <p className="text-xs">Skills</p>
                            </span>
                            <div className="grid    grid-cols-6 gap-x-3 gap-y-3">
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={typescript} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={javascript} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={post} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg1} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg2} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg3} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg15} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg4} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg5} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg6} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg7} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg8} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg9} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg10} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg12} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg13} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg11} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg14} width="40" height="40" />
                                </div>
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg16} width="40" height="40" />
                                </div>

                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg18} width="40" height="40" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-4 ">
                            <span className="self-center lg:self-start">
                                <p className="text-xs">Currently Learning</p>
                            </span>
                            <div className="grid    grid-cols-6 gap-x-3 gap-y-3 ">
                                <div className="rounded-lg h-fit w-fit p-2 flex items-center bg-[#383E45] hover:scale-105 trans">
                                    <Image src={svg17} width="40" height="40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;
