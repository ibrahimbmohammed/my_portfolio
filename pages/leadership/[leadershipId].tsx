// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import Image from '@hoc/next-base-image';
// import HomeWrapper from '@hoc/home-wrapper';
import { AllDataQueryQuery } from '@gentypes/index';
import humanPlaceHolder from '@assets/png/derby.png';
// import styles from '../styles/Home.module.css';

function SingleLeader() {
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
        <section className=" flex flex-col  items-start px-[6rem] pb-[4rem]">
            <div className="px-12 py-8">
                <p className="font-extrabold">__Get Updated</p>
                <p className="text-primaryColor font-semibold text-2xl">Leaders</p>
            </div>
            <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] flex  space-x-12 pb-8 min-h-[25rem] w-full rounded-md overflow-hidden">
                <div className=" min-h-[25rem] w-[22rem] rounded-md overflow-hidden">
                    <div className="flex items-center justify-start">
                        <Image
                            className=""
                            src={humanPlaceHolder.src}
                            layout="fixed"
                            height={400}
                            width={370}
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-4  mt-[4rem] max-w-[50rem] pr-8">
                    <p className="text-primaryColor text-3xl">Engr. Olanike Ogunbona, MNSE</p>
                    <p className="text-primaryText font-light text-lg">Chairman</p>
                    <p className="text-primaryText  text-xs font-thin  text-justify leading-loose ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                        eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                        pellentesque bibendum odio. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi varius eleifend enim non luctus. Vestibulum magna
                        dui, porttitor vel diam nec, pellentesque bibendum odio. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Morbi varius eleifend enim non
                        luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                        odio.
                    </p>
                </div>
            </div>
        </section>
    );
}

SingleLeader.PageLayout = AboutLayout;

export default SingleLeader;
