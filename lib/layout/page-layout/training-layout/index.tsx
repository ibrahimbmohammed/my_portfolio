import backImage from '@assets/png/trainingBg.png';
import NavbarItem from '@atoms/nav-item';
import HomeWrapper from '@hoc/home-wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Home ', link: '/' },
    { title: '>', link: '/' },
    { title: 'Training', link: '/training' },
];
function TrainingLayout({ children }: Props) {
    return (
        <>
            <main
                className="h-[18rem]  flex flex-col items-start justify-between pl-[6rem] "
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="md:max-w-[42rem] flex flex-col mt-[6rem]  items-start">
                    <p className="text-white font-semibold text-3xl ">Training</p>
                    <p className="text-white font-light text-justify tracking-wider">
                        Welcome to our Training
                    </p>
                </div>
                <nav className="md:h-[4rem] flex items-center text-white justify-center space-x-2">
                    {routesItems.map((item: Route) => {
                        if (item.title === '>') return <MdKeyboardArrowRight />;
                        return <NavbarItem link={item.link} title={item.title} />;
                    })}
                </nav>
            </main>

            <div className="relative">{children}</div>
        </>
    );
}

export default HomeWrapper(TrainingLayout);
