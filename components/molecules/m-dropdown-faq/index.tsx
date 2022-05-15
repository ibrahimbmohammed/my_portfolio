import Image from '@hoc/next-base-image';
import { Disclosure } from '@headlessui/react';
import { MdArrowDropDown } from 'react-icons/md';
import FaqLogo from '@assets/svg/Icon.svg';

interface FaqDropMenuProps {
    answer: string | null | undefined;
    question: string | null | undefined;
}

const FaqDropMenu = ({ question, answer }: FaqDropMenuProps) => {
    return (
        <div className="w-full px-4 pt-1">
            <div className="mx-auto w-full max-w-md rounded-md  p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="relative">
                                <div className="absolute -left-6 top-[0.15rem]">
                                    <div className="rounded-lg overflow-hidden max-h-[15rem]">
                                        <Image
                                            src={FaqLogo.src}
                                            layout="fixed"
                                            height={30}
                                            width={20}
                                        />
                                    </div>
                                </div>
                                <Disclosure.Button
                                    className={`flex w-full justify-between ${
                                        open
                                            ? 'bg-white drop-shadow-lg rounded-t-lg'
                                            : 'bg-[#F3FAF9]'
                                    }   px-4 py-2 text-left text-sm font-thin hover:b focus:outline-none `}
                                >
                                    <span>{question?.substring(0, 30)}</span>
                                    <MdArrowDropDown
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-primaryColor`}
                                    />
                                </Disclosure.Button>
                            </div>
                            <Disclosure.Panel
                                className={`px-4 pt-4 pb-2 ${
                                    open ? 'bg-white drop-shadow-lg rounded-b-lg' : 'bg-[#F3FAF9]'
                                } font-thin text-sm  text-gray-500`}
                            >
                                {answer}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default FaqDropMenu;
