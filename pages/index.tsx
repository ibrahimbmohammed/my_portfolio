import type { NextPage } from 'next';
import Navbar from '@molecules/navbar ';
import SectionOne from '@organisms/section-1';
import SectionTwo from '@organisms/section-2';
import SectionThree from '@organisms/section-3';
import SectionFour from '@organisms/section-4';
import SectionFive from '@organisms/section-5';

const Home: NextPage = () => {
    return (
        <div className="flex  flex-col font-theme">
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    );
};

export default Home;
