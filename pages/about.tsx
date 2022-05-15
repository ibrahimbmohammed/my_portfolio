// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutPageLayout from '@lib/layout/page-layout/about-layout';
import AboutUiLayout from '@lib/layout/ui-layout/about-layout';
import InnerHTML from '@atoms/a-inner-html';
import SideNavBar from '@molecules/m-sidebar-navigator-about';
import AboutImageCard from '@molecules/m-card-about-side-image';
import { WebsiteAboutPagesQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';

const About = () => {
    const [aboutData] = useFetchQuery<WebsiteAboutPagesQuery>('/api/about');
    const [about, setAbout] = useState<string>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setAbout(aboutData?.websiteAboutPage![0] ?? about);
    }, [aboutData]);

    const newAboutData = (aboutData?.websiteAboutPage || []).map((item) => {
        return (item as string).replace('../../../../../', `${process.env.NEXT_PUBLIC_PHOTO_URL}/`);
    });

    const handleAbout = (_aboutData: any, index: any) => {
        setAbout(undefined);
        setCurrentIndex(index);
        setAbout(_aboutData);
    };

    return (
        <AboutUiLayout headText="__About Us" subText="NIWE we strive for ..." className="">
            <SideNavBar
                handleAbout={handleAbout}
                storeData={newAboutData}
                currentIndex={currentIndex}
            />
            <InnerHTML content={about} containerStyle="max-w-[52rem]" htmlStyle="" />
            <AboutImageCard />
        </AboutUiLayout>
    );
};

About.PageLayout = AboutPageLayout;

export default About;
