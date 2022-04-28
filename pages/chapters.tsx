// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import Image from '@hoc/next-base-image';
import { AllDataQueryQuery } from '@gentypes/index';
import { Disclosure, Transition } from '@headlessui/react';
import { MdArrowDropDown } from 'react-icons/md';

const backImage = 'https://peddlesoft.com///media/events/IMG-20220318-WA0020.jpg';
function Chapters() {
    const [resData, setResData] = useState<AllDataQueryQuery>();
    // TODO : make this a function, params: url, setFunc, toast
    async function ApiCall() {
        try {
            const response = await fetch('/api/main');
            const data: AllDataQueryQuery = await response.json();
            setResData({ ...data });
        } catch (e) {
            // usually toast the error as a message
            console.log('error', e);
        }
    }

    useEffect(() => {
        ApiCall();
    }, []);
    console.log('error', resData);
    return (
        <section className=" flex flex-col  items-start container">
            <div className="px-12 py-8">
                <p className="font-extrabold">__Get Updated</p>
                <p className="text-primaryColor font-semibold text-2xl">NIWE Chapters</p>
            </div>
            <div className="w-full  rounded-lg   border-separate    my-table-spacing  shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] ">
                <table className="w-full border-separate  [border-spacing:0.75rem] ">
                    <tr className="rounded-lg text-left  font-light text-primaryColor   ">
                        <th className="p-2">Sr. No</th>
                        <th className="p-2">Chapter</th>
                        <th className="p-2">Address</th>
                        <th className="p-2">Chairman</th>
                        <th className="p-2">Phone Number</th>
                        <th className="p-2">Email Address</th>
                    </tr>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    as="tr"
                                    className="relative    font-thin  w-full rounded-lg   shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]  "
                                >
                                    <td className="px-3 py-8">1</td>
                                    <td className="px-3 py-8 text-primaryColor">Abekuta</td>
                                    <td className="px-3 py-8">
                                        No 13, David Ejoor Street, Apo, Gudu District, Abuja No 13,
                                        David Ejoor Street, Apo, Gudu District, Abuja
                                    </td>
                                    <td className="px-3 py-8">Engr. Olanike Ogunbona, MNSE</td>
                                    <td className="px-3 py-8">080666777222</td>
                                    <td className="px-5 py-8 text-primaryColor">
                                        olanikeogunbona@gmail.com
                                    </td>

                                    <MdArrowDropDown
                                        className={`${
                                            open ? 'transform rotate-180' : ''
                                        } absolute hover:cursor-pointer right-0 text-3xl self-end h-full  text-primaryColor`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                />
                                <Disclosure.Panel className="absolute md:w-[94%] lg:w-[95%] 1xl:w-[96%] 1.5xl:w-[95%] 2xl:w-[90%] 3xl:w-[95%] h-80 shadow-2xl rounded-lg px-4 bg-white   text-sm text-gray-500 ">
                                    <div className="flex space-x-12 items-center justify-between">
                                        <div className="flex flex-col  divide-y-2 space-y-6">
                                            <span className="flex flex-col pl-8 pt-2">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Chairman
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    Engr. Olanike Ogunbona, MNSE
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Mobile Number
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    +2349133488866
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Email
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    olanikeogunbona@niwee.com
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Address:
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    13, Stadium Road, Ijanu-ipaja Street, Abeokuta,
                                                    Ogun State
                                                </p>
                                            </span>
                                        </div>
                                        <div className="event flex flex-col space-y-3">
                                            <p className="font-normal text-[1rem] text-primaryText">
                                                __ Events
                                            </p>
                                            <div className="flex space-x-4 px-3 py-2 rounded-lg shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] ">
                                                <div className="rounded-lg overflow-hidden max-h-[15rem]">
                                                    <Image
                                                        src={backImage}
                                                        layout="fixed"
                                                        height={340}
                                                        width={200}
                                                    />
                                                </div>
                                                <div className="flex flex-col max-w-[20rem] space-y-3">
                                                    <p className="font-normal text-primaryColor text-xl">
                                                        Nigerian Institution Of Water Engineers
                                                    </p>
                                                    <time className="font-thin text-xs text-primaryColor">
                                                        Jan. 11, 2022
                                                    </time>
                                                    <p className="font-thin text-md text-primaryText">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Morbi varius eleifend enim
                                                        non luctus. Vestibulum magna dui, porttitor
                                                        vel diam nec, pellentesque bibendum odio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                                <div className={`${open ? 'h-80' : 'h-0'}`}> </div>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    as="tr"
                                    className="relative    font-thin  w-full rounded-lg   shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]  "
                                >
                                    <td className="px-3 py-8">1</td>
                                    <td className="px-3 py-8 text-primaryColor">Abekuta</td>
                                    <td className="px-3 py-8">
                                        No 13, David Ejoor Street, Apo, Gudu District, Abuja No 13,
                                        David Ejoor Street, Apo, Gudu District, Abuja
                                    </td>
                                    <td className="px-3 py-8">Engr. Olanike Ogunbona, MNSE</td>
                                    <td className="px-3 py-8">080666777222</td>
                                    <td className="px-5 py-8 text-primaryColor">
                                        olanikeogunbona@gmail.com
                                    </td>

                                    <MdArrowDropDown
                                        className={`${
                                            open ? 'transform rotate-180' : ''
                                        } absolute hover:cursor-pointer right-0 text-3xl self-end h-full  text-primaryColor`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                />
                                <Disclosure.Panel className="absolute md:w-[94%] lg:w-[95%] 1xl:w-[96%] 1.5xl:w-[95%] 2xl:w-[90%] 3xl:w-[95%] h-80 shadow-2xl rounded-lg px-4 bg-white   text-sm text-gray-500 ">
                                    <div className="flex space-x-12 items-center justify-between">
                                        <div className="flex flex-col  divide-y-2 space-y-6">
                                            <span className="flex flex-col pl-8 pt-2">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Chairman
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    Engr. Olanike Ogunbona, MNSE
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Mobile Number
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    +2349133488866
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Email
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    olanikeogunbona@niwee.com
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Address:
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    13, Stadium Road, Ijanu-ipaja Street, Abeokuta,
                                                    Ogun State
                                                </p>
                                            </span>
                                        </div>
                                        <div className="event flex flex-col space-y-3">
                                            <p className="font-normal text-[1rem] text-primaryText">
                                                __ Events
                                            </p>
                                            <div className="flex space-x-4 px-3 py-2 rounded-lg shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] ">
                                                <div className="rounded-lg overflow-hidden max-h-[15rem]">
                                                    <Image
                                                        src={backImage}
                                                        layout="fixed"
                                                        height={340}
                                                        width={200}
                                                    />
                                                </div>
                                                <div className="flex flex-col max-w-[20rem] space-y-3">
                                                    <p className="font-normal text-primaryColor text-xl">
                                                        Nigerian Institution Of Water Engineers
                                                    </p>
                                                    <time className="font-thin text-xs text-primaryColor">
                                                        Jan. 11, 2022
                                                    </time>
                                                    <p className="font-thin text-md text-primaryText">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Morbi varius eleifend enim
                                                        non luctus. Vestibulum magna dui, porttitor
                                                        vel diam nec, pellentesque bibendum odio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                                <div className={`${open ? 'h-80' : 'h-0'}`}> </div>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    as="tr"
                                    className="relative    font-thin  w-full rounded-lg   shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]  "
                                >
                                    <td className="px-3 py-8">1</td>
                                    <td className="px-3 py-8 text-primaryColor">Abekuta</td>
                                    <td className="px-3 py-8">
                                        No 13, David Ejoor Street, Apo, Gudu District, Abuja No 13,
                                        David Ejoor Street, Apo, Gudu District, Abuja
                                    </td>
                                    <td className="px-3 py-8">Engr. Olanike Ogunbona, MNSE</td>
                                    <td className="px-3 py-8">080666777222</td>
                                    <td className="px-5 py-8 text-primaryColor">
                                        olanikeogunbona@gmail.com
                                    </td>

                                    <MdArrowDropDown
                                        className={`${
                                            open ? 'transform rotate-180' : ''
                                        } absolute hover:cursor-pointer right-0 text-3xl self-end h-full  text-primaryColor`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                />
                                <Disclosure.Panel className="absolute md:w-[94%] lg:w-[95%] 1xl:w-[96%] 1.5xl:w-[95%] 2xl:w-[90%] 3xl:w-[95%] h-80 shadow-2xl rounded-lg px-4 bg-white   text-sm text-gray-500 ">
                                    <div className="flex space-x-12 items-center justify-between">
                                        <div className="flex flex-col  divide-y-2 space-y-6">
                                            <span className="flex flex-col pl-8 pt-2">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Chairman
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    Engr. Olanike Ogunbona, MNSE
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Mobile Number
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    +2349133488866
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Email
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    olanikeogunbona@niwee.com
                                                </p>
                                            </span>
                                            <span className="flex flex-col pl-8 pt-2 ">
                                                <p className="font-semibold text-primaryText text-md ">
                                                    Address:
                                                </p>
                                                <p className="font-thin text-primaryText text-md">
                                                    13, Stadium Road, Ijanu-ipaja Street, Abeokuta,
                                                    Ogun State
                                                </p>
                                            </span>
                                        </div>
                                        <div className="event flex flex-col space-y-3">
                                            <p className="font-normal text-[1rem] text-primaryText">
                                                __ Events
                                            </p>
                                            <div className="flex space-x-4 px-3 py-2 rounded-lg shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] ">
                                                <div className="rounded-lg overflow-hidden max-h-[15rem]">
                                                    <Image
                                                        src={backImage}
                                                        layout="fixed"
                                                        height={340}
                                                        width={200}
                                                    />
                                                </div>
                                                <div className="flex flex-col max-w-[20rem] space-y-3">
                                                    <p className="font-normal text-primaryColor text-xl">
                                                        Nigerian Institution Of Water Engineers
                                                    </p>
                                                    <time className="font-thin text-xs text-primaryColor">
                                                        Jan. 11, 2022
                                                    </time>
                                                    <p className="font-thin text-md text-primaryText">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Morbi varius eleifend enim
                                                        non luctus. Vestibulum magna dui, porttitor
                                                        vel diam nec, pellentesque bibendum odio.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                                <div className={`${open ? 'h-80' : 'h-0'}`}> </div>
                            </>
                        )}
                    </Disclosure>
                </table>
            </div>
            {/* <div className=""></div> */}
        </section>
    );
}

Chapters.PageLayout = AboutLayout;

export default Chapters;
