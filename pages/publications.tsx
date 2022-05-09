// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import { AllDataQueryQuery } from '@gentypes/index';
import Button from '@atoms/button';

const publications = [
    {
        question: 'who we are',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
    },
    {
        question: 'who we are',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
    },
];

function PublicationCard() {
    return (
        <div className="drop-shadow-xl bg-white space-y-5 rounded-lg px-4 py-3 flex flex-col">
            <span className="self-end">
                <p className="text-gray-300 text-xs">Research Article</p>
            </span>
            <span className="">
                <p className="">Two Part to Learning Software</p>
            </span>
            <span className="">
                <p className="font-thin text-sm">
                    Chemical activation of Artocarpus heterophyllus Lam (jackfruit peel) via
                    phosphoric acid was focused on this study for... Chemical activation of
                    Artocarpus heterophyllus Lam (jackfruit peel) via phosphoric acid was focused on
                    this study for...
                </p>
            </span>
            <div className="self-end">
                <Button type="button" label="Download" />
            </div>
        </div>
    );
}
function Publication() {
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
        <section className="flex flex-col pb-8">
            <div className="px-12 py-8">
                <p className="font-extrabold">__Get Updated</p>
                <p className="text-primaryColor font-semibold text-2xl">Publication</p>
            </div>
            <div className="flex space-x-6 items-start justify-between px-12">
                <div className="bg-[#F3FAF9] min-w-[20rem] rounded-md">
                    <ul className="pl-3 py-4 space-y-8 text-sm ">
                        <li className="">Journals</li>
                        <li className="">E-Newsletter</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-3">
                    {publications.map(() => (
                        <PublicationCard />
                    ))}
                </div>
            </div>
        </section>
    );
}

Publication.PageLayout = AboutLayout;

export default Publication;
