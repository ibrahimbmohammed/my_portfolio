import Image from '@hoc/next-base-image';
import Link from 'next/link';

interface LeadershipCardProps {
    id: string | null | undefined;
    name?: string | null | undefined;
    bio?: string | null | undefined;
    photoUrl?: string | null | undefined;
    position?: {
        position: string | undefined;
    } | null;
}

const LeadershipCard = ({ id, name, bio, photoUrl, position }: LeadershipCardProps) => {
    return (
        <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] min-h-[25rem] w-[17rem] rounded-md overflow-hidden">
            <div className="flex items-center  max-h-[12rem] overflow-hidden  justify-center">
                <Image
                    className=""
                    src={
                        photoUrl
                            ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${photoUrl}`
                            : `${process.env.NEXT_PUBLIC_USER_IMAGE_PLACEHOLDER}`
                    }
                    layout="fixed"
                    height={170}
                    width={300}
                />
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <p className="font-semibold text-primaryColor text-xl line-clamp-2">{name}</p>
                <p className="font-thin text-sm">{position?.position}</p>
                <p className="text-xs text-justify line-clamp-5">
                    {bio?.substring(0, 50).concat('..')}
                </p>
                <Link href={`/directors/${id}`}>
                    <p className="font-bold self-end  text-[0.5rem] text-primaryColor">
                        View More . . .
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default LeadershipCard;
