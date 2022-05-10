// import EventCard from '@molecules/event-card';
// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import { AllDataQueryQuery } from '@gentypes/index';

// const publications = [
//     {
//         question: 'who we are',
//         answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
//     },
//     {
//         question: 'who we are',
//         answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum odio.  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non.',
//     },
// ];

function Events() {
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
                <p className="text-primaryColor font-semibold text-2xl">Events</p>
            </div>
            <div className="flex  items-start space-x-[8rem] px-12">
                <div className="bg-[#F3FAF9] min-w-[20rem] rounded-md">
                    <ul className="pl-3 py-4 space-y-8 text-sm ">
                        <li className="">All</li>
                        <li className="">ICEPT</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-x-8">
                    {/* {publications.map(() => (
                        <EventCard />
                    ))} */}
                    <div className="">hello</div>
                </div>
            </div>
        </section>
    );
}

Events.PageLayout = AboutLayout;

export default Events;
