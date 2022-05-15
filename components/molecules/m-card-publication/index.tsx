import Button from '@atoms/a-button';

interface PublicationCardProps {
    title: string | undefined;
    abstract: string | undefined;
    externalUpload: string | undefined | null;
    fileUrl: string | undefined | null;
}

const PublicationCard = ({ title, abstract, externalUpload, fileUrl }: PublicationCardProps) => {
    return (
        <div className="drop-shadow-xl  max-h-[24rem] bg-white space-y-5 rounded-lg px-4 py-3 flex flex-col">
            <span className="self-end">
                <p className="text-gray-300 text-xs">{title}</p>
            </span>
            <span className="">
                <p className="">{title}</p>
            </span>
            <span className="min-w-full">
                <p className="font-thin text-sm line-clamp-4">{abstract}</p>
            </span>
            <div className="self-end">
                <a
                    href={
                        externalUpload == null
                            ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${fileUrl}`
                            : (externalUpload as unknown as string)
                    }
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button type="button" label="Download" />
                </a>
            </div>
        </div>
    );
};

export default PublicationCard;
