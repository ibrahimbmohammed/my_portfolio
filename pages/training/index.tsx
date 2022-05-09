// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import TrainingLayout from '@lib/layout/page-layout/training-layout';
import Image from '@hoc/next-base-image';
// import HomeWrapper from '@hoc/home-wrapper';
import CurrencySvg from '@atoms/currency-svg';
import { AllDataQueryQuery } from '@gentypes/index';
import trainingPlaceHolder from '@assets/png/trainingPlaceHolder.png';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineClockCircle } from 'react-icons/ai';
import dayjs from 'dayjs';
import Button from '@atoms/button';

function Training() {
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
                <p className="text-primaryColor font-semibold text-2xl">Training</p>
            </div>
            <div className="grid grid-cols-4 gap-4 p-5 w-full">
                <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] max-h-[26rem] w-[18.5rem] rounded-md overflow-hidden">
                    <div className="flex items-center justify-center">
                        <Image
                            className=""
                            src={trainingPlaceHolder.src}
                            layout="fixed"
                            height={170}
                            width={350}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 p-4 items-center ">
                        <p className="font-semibold text-primaryColor tracking-tight text-md line-clamp-2">
                            Introduction to HR Management
                        </p>
                        <p className="text-xs text-justify font-thin  line-clamp-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                            eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                            pellentesque bibendum odio.{' '}
                        </p>

                        <hr className=" w-full bg-gray-400 px-1" />

                        <div className="flex items-center justify-between w-full py-2">
                            <span className="flex flex-col space-y-3">
                                <div className="flex space-x-1 items-center">
                                    <span className="text-primaryColor">
                                        <GoCalendar />
                                    </span>
                                    <time className="font-light text-xs">
                                        {dayjs(new Date(2018, 8, 18)).format('DD/MM/YYYY')}
                                    </time>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span className="text-primaryColor">
                                        <AiOutlineClockCircle />
                                    </span>
                                    <span className="font-light text-xs">virtual</span>
                                </div>
                            </span>
                            <span className="flex items-center space-x-1">
                                <span className="">
                                    <CurrencySvg />
                                </span>
                                <p className="font-normal  text-lg">5000.00</p>
                            </span>
                        </div>

                        <Button
                            label="view"
                            className="h-[2.2rem] w-[6rem] rounded-xl text-sm font-normal"
                            type="button"
                        />
                    </div>
                </div>
                <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] max-h-[26rem] w-[18.5rem] rounded-md overflow-hidden">
                    <div className="flex items-center justify-center">
                        <Image
                            className=""
                            src={trainingPlaceHolder.src}
                            layout="fixed"
                            height={170}
                            width={350}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 p-4 items-center ">
                        <p className="font-semibold text-primaryColor tracking-tight text-md line-clamp-2">
                            Introduction to HR Management
                        </p>
                        <p className="text-xs text-justify font-thin  line-clamp-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
                            eleifend enim non luctus. Vestibulum magna dui, porttitor vel diam nec,
                            pellentesque bibendum odio.{' '}
                        </p>

                        <hr className=" w-full bg-gray-400 px-1" />

                        <div className="flex items-center justify-between w-full py-2">
                            <span className="flex flex-col space-y-3">
                                <div className="flex space-x-1 items-center">
                                    <span className="text-primaryColor">
                                        <GoCalendar />
                                    </span>
                                    <time className="font-light text-xs">
                                        {dayjs(new Date(2018, 8, 18)).format('DD/MM/YYYY')}
                                    </time>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span className="text-primaryColor">
                                        <AiOutlineClockCircle />
                                    </span>
                                    <span className="font-light text-xs">virtual</span>
                                </div>
                            </span>
                            <span className="flex items-center space-x-1">
                                <span className="">
                                    <CurrencySvg />
                                </span>
                                <p className="font-normal  text-lg">5000.00</p>
                            </span>
                        </div>

                        <Button
                            label="view"
                            className="h-[2.2rem] w-[6rem] rounded-xl text-sm font-normal"
                            type="button"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

Training.PageLayout = TrainingLayout;

export default Training;
