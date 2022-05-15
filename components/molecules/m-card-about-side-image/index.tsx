import Image from '@hoc/next-base-image';

const conferenceImage = 'https://peddlesoft.com///media/events/New_Niwe_Conference.jpeg';

interface AboutImageCardProps {
    image?: string;
    height?: number;
    width?: number;
}
const AboutImageCard = ({
    image = conferenceImage,
    height = 350,
    width = 500,
}: AboutImageCardProps) => {
    return (
        <div className="h-full mt-8 flex items-center">
            <div className="max-h-[15rem] max-w-[25rem] rounded-3xl overflow-hidden ">
                <Image src={image} height={height} width={width} />
            </div>
        </div>
    );
};

export default AboutImageCard;
