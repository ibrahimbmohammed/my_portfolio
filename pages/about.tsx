// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import AboutLayout from '@lib/layout/page-layout/about-layout';

import { AllDataQueryQuery } from '@gentypes/index';

function About() {
    const [resData, setResData] = useState<AllDataQueryQuery>();
    // TODO : make this a function, params: url, setFunc, toast
    async function ApiCall() {
        try {
            const response = await fetch('/api/main');
            const data: AllDataQueryQuery = await response.json();
            setResData({ ...data });
        } catch (e) {
            // usually toast the error as a message
            console.log('error', e);
        }
    }
    console.log('error', resData);
    useEffect(() => {
        ApiCall();
    }, []);

    return <div className="">hello world</div>;
}

About.PageLayout = AboutLayout;

export default About;
