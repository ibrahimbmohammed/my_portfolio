import Section from '@atoms/a-section';
import ButtonWithBackdrop from '@molecules/m-button-with-backdrop';
import Image from '@hoc/next-base-image';

const backImage = 'https://peddlesoft.com///media/NIWE/website/Carousel_1_fJTV5AK.jpg';

function HeroSectionMain() {
    return (
        <Section className=" h-[calc(100vh_-_5rem)] w-full flex">
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
        </Section>
    );
}

export default HeroSectionMain;
