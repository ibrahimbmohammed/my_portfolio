/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import hotelpic from '@assets/png/hotel1.png';
import propic2 from '@assets/png/pro2.png';
import propic4 from '@assets/png/pro4.png';
import propic5 from '@assets/png/pro5.png';
import propic6 from '@assets/png/pro6.png';
import propic7 from '@assets/png/pro7.png';
import propic8 from '@assets/png/pro8.png';
import propic9 from '@assets/png/pro9.png';
import { FaGithubAlt, FaGlobeAsia } from 'react-icons/fa';
import Image from 'next/image';

function SectionFour() {
    return (
        <section
            id="sectionFour"
            className="sect h-fit relative md:overflow-hidden  flex items-center justify-center pt-[12rem]"
        >
            <span className="inline-block  absolute -top-[5rem] right-[3rem]">
                <h1 className="font-extrabold  self-center mx-auto text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 mt-40 md:mt-32 md:ml-16">
                    MY PROJECTS
                </h1>
            </span>
            <div className="container grid grid-cols-1 gap-y-5 justify-items-center  md:justify-items-center md:grid-cols-4 md:gap-5  justify-center items-center ">
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://peaceful-brahmagupta-20d30e.netlify.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/react-hotel-rooms-app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={hotelpic} height={300} width={450} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://boring-thompson-c7b751.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/metaCare"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic9} height={250} width={350} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://naughty-almeida-bd2a6a.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/kanban_board"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic8} height={250} width={350} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://maxsomlab-front.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a href="#" rel="noreferrer">
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic4} height={350} width={650} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://candourph.netlify.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/Candour"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic5} height={250} width={350} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://tellit-git-develop-israelite6.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a href="#" rel="noreferrer">
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic6} height={250} width={350} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://kind-cray-e14135.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/react-phone-store"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic7} height={250} width={350} />
                </div>
                <div className="border border-gray-700 relative rounded-md w-[14rem] h-[8rem] md:w-[20rem] md:h-[12rem] overflow-hidden">
                    <div className="absolute z-20 w-full h-full inset-0 hover:bg-black/20 bg-black/80 transition-all delay-150 ease-in-out" />
                    <div className="h-8 bottom-0 w-full overflow-hidden  absolute hover:h-[12rem] flex items-center justify-center z-30  space-x-3 transition-all delay-150 ease-in-out">
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://github.com/ibrahimbmohammed/Netflix-Clone"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobeAsia />
                            </a>
                        </div>
                        <div className="px-4 py-1 border border-white rounded-md cursor-pointer">
                            <a
                                href="https://ibrahimbmohammed.github.io/Netflix-Clone/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <Image src={propic2} height={250} width={350} />
                </div>
            </div>
        </section>
    );
}

export default SectionFour;
