import type { NextPage } from 'next';
import HomeWrapper from '@hoc/home-wrapper';
import { AllDataQueryQuery } from '@gentypes/index';
import useFetchQuery from '@lib/hooks/fetch-query';
import HeroSection from '@molecules/m-section-hero-main';
import ConferenceSection from '@molecules/m-section-conference-main';
import AboutUsSection from '@molecules/m-section-about-us-main';
import EventSection from '@molecules/m-section-event-main';
import PartnersSection from '@molecules/m-section-partners-main';

const Home: NextPage = () => {
    const [resData] = useFetchQuery<AllDataQueryQuery>('/api/main');

    // partners, the partners section only needs an input of an array, to increase reusability.
    const partners = resData?.website?.org?.sponsorSet?.edges;

    return (
        <>
            <HeroSection />
            <ConferenceSection resData={resData} />
            <AboutUsSection />
            <EventSection resData={resData} />
            <PartnersSection partners={partners} />
        </>
    );
};

export default HomeWrapper(Home);
