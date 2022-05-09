// import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeWrapper from '@hoc/home-wrapper';
import { AllDataQueryQuery } from '@gentypes/index';
import ButtonWithBackdrop from '@molecules/button-with-backdrop';
import Image from '@hoc/next-base-image';
import useFetchQuery from '@lib/hooks/fetch-query';
import dayjs from 'dayjs';
import { GoCalendar, GoLocation } from 'react-icons/go';

import Button from '@atoms/button';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import BackImage from '@assets/png/intersects.png';

import EdgeImage from '@assets/svg/edge-styles.svg';

const backImage = 'https://peddlesoft.com///media/NIWE/website/Carousel_1_fJTV5AK.jpg';
const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);
function Home() {
    const [resData] = useFetchQuery<AllDataQueryQuery>('/api/main');
    const partners = resData?.website?.org?.sponsorSet?.edges;

    return (
        <div className="mt-2 container">
            <section className=" h-[calc(100vh_-_5rem)] w-full flex">
                <div className="flex items-start mt-[12rem] ml-[6rem] justify-start md:w-1/2">
                    <div className="flex flex-col  space-y-8">
                        <h1 className="font-semibold text-3xl text-primaryColor">
                            The official Website of NIWE
                        </h1>
                        <p className="font-light text-gray-300 text-sm">
                            Through the coming together of National Engineers
                        </p>
                        <div className="">
                            <ButtonWithBackdrop className="text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className=" relative md:w-1/2 flex mt-8">
                    <div className="md:w-1/2" />
                    <div className="md:w-1/2 bg-primaryColor" />
                    <div className="absolute inset-0 top-10 h-[74%] w-[95%]">
                        <div
                            style={{
                                boxShadow: '260px -85px 270px -11px rgba(255,255,255,0.89) inset',
                            }}
                            className=" absolute    z-10 backdrop-blur-none h-full w-full "
                        />
                        <Image src={backImage} layout="fixed" height={400} width={600} />
                    </div>
                </div>
            </section>
            <section
                className=" h-[calc(100vh_-_5rem)] w-full flex"
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(${BackImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full md:w-[50%] flex flex-col ">
                    <div className="flex section-margin flex-col space-y-4 ">
                        <p className="text-secondaryText mt-3 font-semibold">{`UPCOMING CONFERENCES ${dayjs(
                            resData?.orgConference?.endDate,
                        ).format('YYYY')}`}</p>
                        <p className="text-secondaryText text-3xl font-normal">
                            {resData?.orgConference?.name}
                        </p>
                        <div className="flex space-x-3 w-full text-white ">
                            <div className="flex space-x-1 items-center w-[50%]">
                                <span className="">
                                    <GoCalendar />
                                </span>
                                <time className="font-light text-xs">
                                    {dayjs(resData?.orgConference?.startDate).format('DD')} -{' '}
                                    {dayjs(resData?.orgConference?.endDate).format('DD MMMM, YYYY')}
                                </time>
                            </div>
                            <div className="flex space-x-1 items-center w-[50%]">
                                <span className="">
                                    <GoLocation />
                                </span>
                                <time className="font-light text-xs">
                                    {resData?.orgConference?.venue}
                                </time>
                            </div>
                        </div>
                        <span className="">
                            {resData?.orgConference && (
                                <div
                                    className={`cms-content  sm:prose-img:hidden prose-table:hidden prose-h2:text-2xl prose-h2:font-bold
                           prose-h3:hidden sm:prose-h4:hidden prose-p:text-white prose-p:text-xs prose-p:font-light prose-h4:hidden prose-h5:hidden prose-h6:hidden `}
                                    key={resData?.orgConference ? 'oldkey' : 'newkwy'}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            resData?.orgConference?.description ||
                                            'annual conference',
                                    }}
                                />
                            )}
                        </span>
                        <a
                            href={`${process.env.NEXT_PUBLIC_ENVIRONMENT_PROTOCOL}conference.${backImage}`}
                        >
                            <Button type="button" btnType="secondary" label="Register" />
                        </a>

                        <br />
                    </div>
                </div>

                <div className="md:w-1/2 rounded-bl-[4rem] overflow-hidden">
                    <Image src={conferenceImage} layout="fixed" height={1100} width={800} />
                </div>
            </section>
            <section className=" h-[calc(100vh_-_10rem)] w-full flex py-6 relative">
                <div className="flex flex-col items-center w-full container">
                    <div className="flex justify-between  w-full h-full">
                        <div className=" section-margin md:w-1/2 ">
                            <p className="font-bold">__About Us </p>
                            <p className="text-primaryColor font-semibold text-2xl">
                                NIWE we strive for ...
                            </p>
                            <div className="logic mt-8 group space-y-8">
                                <div className="shadow-12xl bg-white drop-shadow-2xl  group-hover:drop-shadow-none rounded-lg p-4 ">
                                    <div className="bg-white hover:drop-shadow-2xl rounded-lg p-4 w-full">
                                        hello world Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, molestias porro expedita modi
                                        tempore, eaque aperiam, perferendis sapiente animi atque
                                        ullam. Accusamus, illum.
                                    </div>
                                </div>
                                <div className="shadow-12xl hover:drop-shadow-2xl bg-white  rounded-lg p-4">
                                    about the world Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laudantium quasi explicabo, nemo illo mollitia
                                    corrupti maiores sint voluptatem enim, odit at hic ipsam?
                                </div>
                            </div>
                        </div>
                        <div className=" md:w-1/2 h-full flex justify-center items-center">
                            <div className="max-h-[15rem] max-w-[25rem] rounded-3xl overflow-hidden ">
                                <Image src={conferenceImage} height={350} width={500} />
                            </div>
                        </div>
                    </div>
                    <Button type="button" btnType="primary" label="Register" />
                </div>
                <div className="absolute right-0">
                    <Image
                        className=""
                        src={EdgeImage.src}
                        layout="fixed"
                        height={80}
                        width={200}
                    />
                </div>
            </section>
            <section
                className=" h-[calc(100vh_-_10rem)] w-full flex flex-col bg-primaryColor"
                // style={{
                //     backgroundColor: 'var(--color-primaryColor)',
                //     opacity: '65%',
                // }}
            >
                <div className=" section-margin flex flex-col">
                    <p className="text-secondaryText">EVENTS</p>
                    <p className="text-secondaryText mt-3 font-semibold">{`UPCOMING NEW EVENTS ${dayjs(
                        resData?.orgConference?.endDate,
                    ).format('YYYY')}`}</p>
                    <p className="text-secondaryText">
                        “ The AfriLabs Annual Gathering 2021 marked a monumental milestone for the
                        African technology.
                    </p>
                </div>
                <div className="flex w-full justify-evenly md:mt-[4rem]">
                    <div className="relative   max-h-[20rem] max-w-[35rem] rounded-3xl overflow-hidden ">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-black/60 z-10 flex items-center justify-center">
                                <p className="text-white font-semibold text-xl drop-shadow-sm shadow-2xl ">
                                    NIWEE Annual Gathering 2nd Quarter
                                </p>
                            </div>
                            <Image
                                className=""
                                src={conferenceImage}
                                layout="fixed"
                                height={1100}
                                width={800}
                            />
                        </div>
                    </div>
                    <div className="relative   max-h-[20rem] max-w-[35rem] rounded-3xl overflow-hidden ">
                        <div className="relative w-full h-full">
                            <div className="absolute w-full h-full bg-black/60 z-10 flex items-center justify-center">
                                <p className="text-white font-semibold text-xl drop-shadow-sm shadow-2xl ">
                                    NIWEE Annual Gathering 2nd Quarter
                                </p>
                            </div>
                            <Image
                                className=""
                                src={conferenceImage}
                                layout="fixed"
                                height={1100}
                                width={800}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className=" h-[calc(100vh_-_25rem)] w-full flex py-6">
                <div className="h-98 w-screen flex items-center flex-col  space-x-1 space-y-6 py-10">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-primaryText font-bold text-lg lg:text-lg ">
                            __Partners
                        </h3>
                        <h3 className="text-primaryColor font-semibold text-2xl lg:text-3xl tracking-tighter ">
                            Our Partners
                        </h3>
                        <p className="text-primaryText">
                            NIEEE appreciates our partners, sponsors and other agencies that have
                            help to make the institution strong.
                        </p>
                    </div>

                    <div className="w-2/3   transition-all delay-200 ease-in-out ">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={1}
                            slidesPerGroup={1}
                            loop
                            loopFillGroupWithBlank
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {partners?.map((partner, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <SwiperSlide key={index}>
                                    <span className="">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${partner?.node?.logoUrl}`}
                                            height={120}
                                            width={180}
                                        />
                                    </span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeWrapper(Home);
