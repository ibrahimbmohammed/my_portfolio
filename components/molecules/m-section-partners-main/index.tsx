import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '@hoc/next-base-image';
import Section from '@atoms/a-section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

interface PartnersSectionMainProps {
    partners:
        | ({
              __typename?: 'SponsorTypeEdge' | undefined;
              node?:
                  | {
                        __typename?: 'SponsorType' | undefined;
                        name?: string | null | undefined;
                        logoUrl?: string | null | undefined;
                    }
                  | null
                  | undefined;
          } | null)[]
        | undefined;
}
const PartnersSectionMain = ({ partners }: PartnersSectionMainProps) => {
    return (
        <Section className=" h-[calc(100vh_-_25rem)] w-full flex py-6">
            <div className="h-98 w-screen flex items-center flex-col  space-x-1 space-y-6 py-10">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-primaryText font-bold text-lg lg:text-lg ">__Partners</h3>
                    <h3 className="text-primaryColor font-semibold text-2xl lg:text-3xl tracking-tighter ">
                        Our Partners
                    </h3>
                    <p className="text-primaryText">
                        NIEEE appreciates our partners, sponsors and other agencies that have help
                        to make the institution strong.
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
        </Section>
    );
};

export default PartnersSectionMain;
