import Image from '@hoc/next-base-image';
import Button from '@atoms/a-button';
import dayjs from 'dayjs';
import Link from 'next/link';

interface EventCardProps {
    description: string | null | undefined;
    name: string | null | undefined;
    // org?: OrgType | null | undefined;
    photoUrl: string | null | undefined;
    startDate: string | null | undefined;
    url: string | null | undefined;
}

function EventCard({ description, name, photoUrl, startDate, url }: EventCardProps) {
    return (
        <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] min-h-[25rem] w-[17rem] lg:w-[19rem] rounded-2xl overflow-hidden">
            <div className="relative flex items-center justify-center  max-h-[12rem] rounded-b-2xl overflow-hidden">
                <Image
                    className=""
                    alt="event Image"
                    src={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${photoUrl}`}
                    layout="fixed"
                    height={270}
                    width={300}
                />
                {name && (
                    <Button
                        type="button"
                        label={name?.substring(0, 5)}
                        className="bg-[#FCB32C] absolute top-2 left-3 h-[2.3rem] w-[6rem]"
                    />
                )}
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <p className="font-semibold text-primaryColor tracking-wider text-xs line-clamp-2">
                    {name}
                </p>
                <time className="font-light text-xs">{dayjs(startDate).format('DD/MM/YYYY')}</time>
                <span className="min-h-[12rem]">
                    <p className="text-xs text-justify font-light line-clamp-5">{description} </p>
                </span>
                <p className="font-semibold self-center pt-8   text-xs text-primaryColor cursor-pointer">
                    <Link href={`/events/${url}`}>View Events</Link>
                </p>
            </div>
        </div>
    );
}

export default EventCard;