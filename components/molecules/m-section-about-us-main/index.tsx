import Button from '@atoms/a-button';
import Section from '@atoms/a-section';
import Image from '@hoc/next-base-image';
import EdgeImage from '@assets/svg/edge-styles.svg';

const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';

function AboutUsSectionMain() {
    return (
        <Section className=" h-[calc(100vh_-_10rem)] w-full flex py-6 relative">
            <div className="flex flex-col items-center w-full container">
                <div className="flex justify-between  w-full h-full">
                    <div className=" Section-margin md:w-1/2 ">
                        <p className="font-bold">__About Us </p>
                        <p className="text-primaryColor font-semibold text-2xl">
                            NIWE we strive for ...
                        </p>
                        <div className="logic mt-8 group space-y-8">
                            <div className="shadow-12xl bg-white drop-shadow-2xl  group-hover:drop-shadow-none rounded-lg p-4 ">
                                <div className="bg-white hover:drop-shadow-2xl rounded-lg p-4 w-full">
                                    hello world Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Repellendus, molestias porro expedita modi tempore, eaque
                                    aperiam, perferendis sapiente animi atque ullam. Accusamus,
                                    illum.
                                </div>
                            </div>
                            <div className="shadow-12xl hover:drop-shadow-2xl bg-white  rounded-lg p-4">
                                about the world Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Laudantium quasi explicabo, nemo illo mollitia corrupti
                                maiores sint voluptatem enim, odit at hic ipsam?
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
                <Image className="" src={EdgeImage.src} layout="fixed" height={80} width={200} />
            </div>
        </Section>
    );
}

export default AboutUsSectionMain;
