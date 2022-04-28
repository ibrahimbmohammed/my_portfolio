import { UrlObject } from 'url';
import Link from '@hoc/link';

declare type Url = string | UrlObject;

interface DropDownProps {
    title: string | undefined;
    link?: Url;
}

function DropDownItem({ link, title }: DropDownProps) {
    return (
        <Link
            href={link as Url}
            className="text-sm hover:cursor-pointer pt-1 text-gray-400"
            activeClassName=""
            key={21}
        >
            <p className="">{title}</p>
        </Link>
    );
}

export default DropDownItem;
