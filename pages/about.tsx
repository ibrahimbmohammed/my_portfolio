// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import Image from '@hoc/next-base-image';
import { AllDataQueryQuery } from '@gentypes/index';

const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';
function About() {
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
        <section className="flex flex-col">
            <div className="px-12 py-8">
                <p className="font-extrabold">__About Us</p>
                <p className="text-primaryColor font-semibold text-2xl">NIWE we strive for ...</p>
            </div>
            <div className="flex space-x-6 items-start justify-between px-12">
                <div className="bg-[#F3FAF9] min-w-[20rem] rounded-md">
                    <ul className="pl-3 py-4 space-y-8 text-sm ">
                        <li className="">Who are we?</li>
                        <li className="">Organization History</li>
                        <li className="">Structure of NIEEE</li>
                        <li className="">NIEE Constituiton</li>
                        <li className="">NIEE Members</li>
                    </ul>
                </div>
                <div className="max-w-[34rem] text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio ea
                    illum iure reiciendis soluta delectus! Unde beatae non, rerum corrupti numquam,
                    alias voluptas eveniet officia officiis, pariatur omnis perspiciatis dolores
                    sunt. Magni placeat repellendus hic soluta maxime? Quasi est quaerat amet,
                    placeat saepe quae repellendus adipisci veniam officia culpa?
                </div>
                <div className="h-full mt-8 flex items-center">
                    <div className="max-h-[15rem] max-w-[25rem] rounded-3xl overflow-hidden ">
                        <Image src={conferenceImage} height={350} width={500} />
                    </div>
                </div>
            </div>
        </section>
    );
}

About.PageLayout = AboutLayout;

export default About;
