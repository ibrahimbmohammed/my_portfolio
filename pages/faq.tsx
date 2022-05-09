// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import Image from '@hoc/next-base-image';
import { AllDataQueryQuery } from '@gentypes/index';
import { Disclosure } from '@headlessui/react';
import { MdArrowDropDown } from 'react-icons/md';
import Button from '@atoms/button';
import FaqLogo from '@assets/svg/Icon.svg';

const faq = [
    {
        question: 'who we are',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
    },
    {
        question: 'who we are',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
    },
];

function DropMenu() {
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
                                    <span>What is your refund policy?</span>
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
                                If you&apos;re unhappy with your purchase for any reason, email us
                                within 90 days and we&apos;ll refund you in full, no questions
                                asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}

function FaqPage() {
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
    console.log('error', resData);
    useEffect(() => {
        ApiCall();
    }, []);

    return (
        <section className="flex flex-col pb-[8rem]">
            <div className="px-12 py-8">
                <p className="font-extrabold">__Get Updated</p>
                <p className="text-primaryColor font-semibold text-2xl">FAQs</p>
            </div>
            <div className="flex space-x-6 items-start justify-between px-12">
                <div className="flex flex-col space-y-4 max-w-[24rem] ">
                    <p className="text-primaryColor font-semibold text-2xl">Have any Questions?</p>
                    <p className="text-primaryText text-xs font-light leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet,
                    </p>
                    <Button type="button" className="text-xs" label="Ask your Question" />
                </div>
                <div className="bg-[#F3FAF9] rounded-lg min-h-[24rem] w-[34rem]">
                    {faq.map(() => (
                        <DropMenu />
                    ))}
                </div>
            </div>
        </section>
    );
}

FaqPage.PageLayout = AboutLayout;

export default FaqPage;
