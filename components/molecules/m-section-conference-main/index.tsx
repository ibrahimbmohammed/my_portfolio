import type { AllDataQueryQuery } from '@gentypes/index';
import Button from '@atoms/a-button';
import Section from '@atoms/a-section';
import dayjs from 'dayjs';
import Image from '@hoc/next-base-image';
import { GoCalendar, GoLocation } from 'react-icons/go';
import BackImage from '@assets/png/intersects.png';

const backImage = 'https://peddlesoft.com///media/NIWE/website/Carousel_1_fJTV5AK.jpg';
const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';

interface ConferenceSectionMainProps {
    resData: AllDataQueryQuery | undefined;
}

function ConferenceSectionMain({ resData }: ConferenceSectionMainProps) {
    return (
        <Section
            className=" h-[calc(100vh_-_5rem)] w-full flex"
            style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(${BackImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-full md:w-[50%] flex flex-col ">
                <div className="flex Section-margin flex-col space-y-4 ">
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
                                        resData?.orgConference?.description || 'annual conference',
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
        </Section>
    );
}

export default ConferenceSectionMain;
