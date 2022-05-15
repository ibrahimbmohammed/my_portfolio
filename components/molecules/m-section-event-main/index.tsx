import type { AllDataQueryQuery } from '@gentypes/index';
import Section from '@atoms/a-section';
import Image from '@hoc/next-base-image';
import dayjs from 'dayjs';

const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';

interface EventSectionMainProps {
    resData: AllDataQueryQuery | undefined;
}
function EventSectionMain({ resData }: EventSectionMainProps) {
    return (
        <Section className=" h-[calc(100vh_-_10rem)] w-full flex flex-col bg-primaryColor">
            <div className=" Section-margin flex flex-col">
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
        </Section>
    );
}

export default EventSectionMain;
