// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';
import Image from '@hoc/next-base-image';
// import HomeWrapper from '@hoc/home-wrapper';
import { AllDataQueryQuery } from '@gentypes/index';
import humanPlaceHolder from '@assets/png/humanplaceholder.png';
// import styles from '../styles/Home.module.css';

function Leadership() {
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
                <p className="text-primaryColor font-semibold text-2xl">Leadership</p>
            </div>
            <div className="grid grid-cols-4 gap-4 p-5 w-full ">
                <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] min-h-[25rem] w-[17rem] rounded-md overflow-hidden">
                    <div className="flex items-center  max-h-[12rem] overflow-hidden  justify-center">
                        <Image
                            className=""
                            src={humanPlaceHolder.src}
                            layout="fixed"
                            height={170}
                            width={300}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 p-4">
                        <p className="font-semibold text-primaryColor text-xl line-clamp-2">
                            Engr. Olanike Ogunbona, MNSE
                        </p>
                        <p className="font-thin text-sm">Chairman</p>
                        <p className="text-xs text-justify line-clamp-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                            eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                            pellentesque bibendum odio.{' '}
                        </p>
                        <p className="font-bold self-end  text-[0.5rem] text-primaryColor">
                            View More . . .
                        </p>
                    </div>
                </div>
                <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] min-h-[25rem] w-[17rem] rounded-md overflow-hidden">
                    <div className="flex items-center  max-h-[12rem] overflow-hidden justify-center">
                        <Image
                            className=""
                            src={humanPlaceHolder.src}
                            layout="fixed"
                            height={170}
                            width={300}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 p-4">
                        <p className="font-semibold text-primaryColor text-xl line-clamp-2">
                            Engr. Olanike Ogunbona, MNSE
                        </p>
                        <p className="font-thin text-sm">Chairman</p>
                        <p className="text-xs text-justify line-clamp-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                            eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                            pellentesque bibendum odio.{' '}
                        </p>
                        <p className="font-bold self-end  text-[0.5rem] text-primaryColor">
                            View More . . .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

Leadership.PageLayout = AboutLayout;

export default Leadership;
