import type { NextPage } from 'next';
import Navbar from '@molecules/navbar ';
import SectionOne from '@organisms/section-1';
import SectionTwo from '@organisms/section-2';
import SectionThree from '@organisms/section-3';
import SectionFour from '@organisms/section-4';
import SectionFive from '@organisms/section-5';
import client from 'client';

const Home: NextPage = () => {
    return (
        <div className="flex  flex-col font-theme ">
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    );
};

export async function getStaticProps() {
    // client.getEntry('27XfDfgXVMAOkheAqDefqt').then((data) => {
    //     console.log(data?.fields);
    // });
    const returedData = await client.getEntries({
        skip: 0,
        limit: 20,
        order: 'sys.createdAt',
        content_type: 'portofioWorks',
    });

    // console.log('hi', returedData?.items);
    return {
        props: {
            myData: returedData,
        },
    };
}

export default Home;
