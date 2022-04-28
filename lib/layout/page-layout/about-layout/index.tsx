import { useState, useEffect } from 'react';
import backImage from '@assets/png/Rectangleback.png';
import NavbarItem from '@atoms/nav-item';
import HomeWrapper from '@hoc/home-wrapper';
import { useRouter } from 'next/router';
import { applyThemeFunc, aboutInfoFunc } from '@utils/helpers';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Who We Are', link: '/about' },
    { title: 'Leadership', link: '/leadership' },
    { title: 'Chapters', link: '/chapters' },
    { title: 'Events', link: '/events' },
    { title: 'Publications', link: '/publications' },
    { title: 'FAQ', link: '/faq' },
];
function AboutLayout({ children }: Props) {
    const { asPath, pathname } = useRouter();
    const [sectionInfo, setSectionInfo] = useState<{ title: string; description: string }>();
    applyThemeFunc();
    const sectionData = aboutInfoFunc(asPath);
    useEffect(() => {
        setSectionInfo({ ...sectionData });
    }, [pathname]);

    return (
        <>
            <main
                className="h-[18rem]  flex items-center justify-center "
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="md:max-w-[42rem] flex flex-col justify-center items-center">
                    <p className="text-white font-semibold text-lg ">{sectionInfo?.title}</p>
                    <p className="text-white font-light text-justify ">
                        {sectionInfo?.description}
                    </p>
                </div>
            </main>
            <nav className="md:h-[4rem] bg-[#F3FAF9] flex items-center justify-center space-x-10">
                {routesItems.map((item: Route) => {
                    if (item.title === 'Login' || item.title === 'Register') return null;
                    return <NavbarItem link={item.link} title={item.title} />;
                })}
            </nav>
            <div className="">{children}</div>
        </>
    );
}

export default HomeWrapper(AboutLayout);
