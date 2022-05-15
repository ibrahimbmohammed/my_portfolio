import Image from '@hoc/next-base-image';
import { Disclosure, Transition } from '@headlessui/react';
import { MdArrowDropDown } from 'react-icons/md';

const backImage = 'https://peddlesoft.com///media/events/IMG-20220318-WA0020.jpg';

interface TableItemChapterProps {
    index: number;
    subdivision: string | undefined;
    meetingVenue: string | undefined | null;
    meetingDaysTime: string | undefined | null;
    chairperson: string | undefined | null;
    phoneNumber: string | undefined | null;
    email: string | undefined | null;
    dateOfInauguration: string | undefined | null;
}

const TableItemChapter = ({
    index,
    subdivision,
    meetingVenue,
    meetingDaysTime,
    chairperson,
    phoneNumber,
    email,
    dateOfInauguration,
}: TableItemChapterProps) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as="tr"
                        className="relative    font-thin  w-full rounded-lg   shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)]  "
                    >
                        <td className="px-3 py-8">{index + 1}</td>
                        <td className="px-3 py-8 text-primaryColor">{subdivision}</td>
                        <td className="px-3 py-8">{meetingVenue}</td>
                        <td className="px-3 py-8">{chairperson}</td>
                        <td className="px-3 py-8">{phoneNumber}</td>
                        <td className="px-5 py-8 text-primaryColor">{email}</td>

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
                                        {chairperson}
                                    </p>
                                </span>
                                <span className="flex flex-col pl-8 pt-2 ">
                                    <p className="font-semibold text-primaryText text-md ">
                                        Mobile Number
                                    </p>
                                    <p className="font-thin text-primaryText text-md">
                                        {phoneNumber}
                                    </p>
                                </span>
                                <span className="flex flex-col pl-8 pt-2 ">
                                    <p className="font-semibold text-primaryText text-md ">Email</p>
                                    <p className="font-thin text-primaryText text-md">{email}</p>
                                </span>
                                <span className="flex flex-col pl-8 pt-2 ">
                                    <p className="font-semibold text-primaryText text-md ">
                                        Address:
                                    </p>
                                    <p className="font-thin text-primaryText text-md">
                                        {meetingVenue}
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
                                            {subdivision}
                                        </p>
                                        <time className="font-thin text-xs text-primaryColor">
                                            {dateOfInauguration}
                                        </time>
                                        <time className="font-thin text-xs text-primaryColor">
                                            {meetingDaysTime}
                                        </time>
                                        <p className="font-thin text-md text-primaryText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Morbi varius eleifend enim non luctus. Vestibulum magna
                                            dui, porttitor vel diam nec, pellentesque bibendum odio.
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
    );
};

export default TableItemChapter;
