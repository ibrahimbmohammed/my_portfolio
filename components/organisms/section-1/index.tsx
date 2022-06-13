/* eslint-disable import/no-unresolved */
import Sidebar from '@molecules/sidebar';
import Button from '@atoms/button';
import Link from 'next/link';

function SectionOne() {
    return (
        <section
            id="sectionOne"
            className="sect  flex flex-col md:flex-row   items-start overflow-hidden "
        >
            <Sidebar />
            <div className="flex-grow order-last w-full px-3 md:px-0  md:w-20  flex flex-col items-center  md:mt-32 md:pt-28">
                <div className="md:w-1/2">
                    <p className="text-white font-theme text-center md:text-left font-thin -mt-[28rem] md:-mt-[0rem] md:text-lg ">
                        <b>HI there</b>, welcome to my portfolio, i am a passionate web developer
                        and a software engineer, feel free to dive deep into my space.
                    </p>
                </div>
                <Link href="#sectionFour">
                    <div className="-mt-[22rem] md:-mt-[0rem]">
                        <Button />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col flex-grow  relative  w-screen h-full md:w-[1%]  ">
                <div className="absolute h-screen flex flex-col  w-full  ">
                    <div className="inline-block  w-20 h-20  moon rounded-full absolute -top-4 -left-8" />

                    <h1 className="font-extrabold font-fans self-center mx-auto text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-gray-700 to-gray-200 mt-40 md:mt-32 md:ml-16">
                        Moh&rsquo;d Ibrahim
                    </h1>
                    <div className=" inline-block w-72 h-72 moon rounded-full absolute right-0 bottom-24" />
                    <div className="inline-block w-40 h-40  moon rounded-full absolute -bottom-0 -left-8" />

                    <div className="hidden md:inline-block  w-32 h-32 moon rounded-full absolute top-72 left-52" />
                </div>
            </div>

            <div className="hidden md:block font-fans border-r-4 border-gray-200 w-16 h-2/3  mt-16">
                <h1 className="vertical-rl text-orientation font-bold text-white text-6xl tracking-tighter">
                    {' '}
                    PORTFOLIO
                </h1>
            </div>
        </section>
    );
}

export default SectionOne;
