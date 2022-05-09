// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import TrainingLayout from '@lib/layout/page-layout/training-layout';
import Image from '@hoc/next-base-image';
import { AllDataQueryQuery } from '@gentypes/index';
import trainingPlaceHolder from '@assets/png/trainingPlaceHolder.png';
import { BiCheck } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import Button from '@atoms/button';

function TrainingSingle() {
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
        <section className="flex items-start justify-between container">
            <div className="flex flex-col px-[4.3rem] py-8 space-y-12 max-w-[44rem]">
                <div className="">
                    <p className="text-primaryColor font-semibold text-sm pb-2">
                        Course Description
                    </p>
                    <p className="text-primaryText font-thin text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.
                    </p>
                </div>
                <div className="">
                    <p className="text-primaryColor font-semibold text-sm pb-2">
                        What you’ll Learn
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <BiCheck className="text-green-300" />
                            <p className="flex items-center space-x-2 text-primaryText font-thin text-xs">
                                Good working Ethics
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <BiCheck className="text-green-300" />
                            <p className="flex items-center space-x-2 text-primaryText font-thin text-xs">
                                Good working Ethics
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <BiCheck className="text-green-300" />
                            <p className="flex items-center space-x-2 text-primaryText font-thin text-xs">
                                Good working Ethics
                            </p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <BiCheck className="text-green-300" />
                            <p className="flex items-center space-x-2 text-primaryText font-thin text-xs">
                                Good working Ethics
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute right-10 -top-[10rem]">
                <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] max-h-[28rem] w-[17rem] rounded-md overflow-hidden">
                    <div className="flex items-center justify-center">
                        <Image
                            className=""
                            src={trainingPlaceHolder.src}
                            layout="fixed"
                            height={170}
                            width={350}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 p-4 items-start ">
                        <p className="font-semibold text-primaryColor tracking-tight text-sm line-clamp-2">
                            This Course Include:
                        </p>
                        <div className="flex flex-col font-thin text-primaryColor text-xs space-y-2 ">
                            <span className="flex items-center space-x-3">
                                <BiCheck className="text-green-300" />
                                <p className="">Lifetime Access</p>
                            </span>
                            <span className="flex items-center space-x-3">
                                <BiCheck className="text-green-300" />
                                <p className="">Certificate of completion</p>
                            </span>
                            <span className="flex items-center space-x-3">
                                <p className="font-normal">Duration of Course:</p>
                                <p className="">3 days</p>
                            </span>
                            <span className="flex items-center space-x-3">
                                <p className="font-normal">Venue:</p>
                                <p className="">https://zoom.us/j/5551112222.</p>
                            </span>
                            <span className="flex items-center space-x-3">
                                <p className="font-normal">Offline Venue:</p>
                                <p className="">Mr. Shehu Hall</p>
                            </span>
                        </div>

                        <div className="flex w-full justify-center items-center px-1">
                            <Button
                                label="Register"
                                className="h-[2.3rem] w-[9rem] rounded-[0.25rem]  text-xs font-normal"
                                type="button"
                            />
                        </div>
                        <div className="flex items-center w-full justify-center space-x-1">
                            <FaShare className="text-lg text-primaryColor" />
                            <p className="text-sm text-primaryColor">Share this course</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

TrainingSingle.PageLayout = TrainingLayout;

export default TrainingSingle;
