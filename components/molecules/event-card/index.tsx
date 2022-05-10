import Image from '@hoc/next-base-image';
import Button from '@atoms/button';
import dayjs from 'dayjs';

interface IEventCardProps {
    image: string;
    tag?: string;
    title: string;
    date: string;
    bodyText: string;
}

function EventCard({ image, tag, date, title, bodyText }: IEventCardProps) {
    return (
        <div className="shadow-[0px_8px_40px_rgba(9,_44,_76,_0.16)] min-h-[25rem] w-[17rem] lg:w-[19rem] rounded-2xl overflow-hidden">
            <div className="relative flex items-center justify-center  max-h-[12rem] rounded-b-2xl overflow-hidden">
                <Image
                    className=""
                    alt="event Image"
                    src={image}
                    layout="fixed"
                    height={270}
                    width={300}
                />
                {tag && (
                    <Button
                        type="button"
                        label={tag}
                        className="bg-[#FCB32C] absolute top-2 left-3 h-[2.3rem] w-[6rem]"
                    />
                )}
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <p className="font-semibold text-primaryColor tracking-wider text-xs line-clamp-2">
                    {title}{' '}
                </p>
                <time className="font-light text-xs">
                    {dayjs(new Date(date)).format('DD/MM/YYYY')}
                </time>
                <p className="text-xs text-justify font-light line-clamp-5">{bodyText} </p>
                <p className="font-semibold self-center pt-8   text-xs text-primaryColor cursor-pointer">
                    View Events
                </p>
            </div>
        </div>
    );
}

export default EventCard;
