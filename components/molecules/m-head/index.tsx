import Head from 'next/head';
import me from '@assets/png/remove.png';

const HeadComp = () => {
    return (
        <Head>
            <title>ibrahim&apos;s portfolio</title>
            <link rel="icon" href={`${me}`} />
            <meta name="title" content="My Portfolio Website" />
            <meta
                name="description"
                content=" Hello, i’m Mohammed Ibrahim B , a software Engineer with a knack for
                                cybersecurity, my prime motivation is excellence and to excel at any
                                task. I have an inquisitive mind, thus always seeking new adventures
                                and challenges. I&rsquo;m not interested in only developing IT
                                solutions, but rather developing safe IT solutions that are imbued
                                with cyber security consciousness in both the design and
                                implementation."
            />
            <meta property="og:image" content={`${me}`} key="og:image" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ibrahimbmohammed.tech/" />
            <meta property="og:title" content="ibrahim&rsquo;s Portfolio" />
            <meta
                property="og:description"
                content=" Hello, i’m Mohammed Ibrahim B , a software Engineer with a knack for
                cybersecurity, my prime motivation is excellence and to excel at any
                task. I have an inquisitive mind, thus always seeking new adventures
                and challenges. I&rsquo;m not interested in only developing IT
                solutions, but rather developing safe IT solutions that are imbued
                with cyber security consciousness in both the design and
                implementation."
            />
            <meta property="og:image" content={`${me}`} key="og:image" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://ibrahimbmohammed.tech/" />
            <meta property="twitter:title" content="ibrahim&rsquo;s Portfolio" />
            <meta
                property="twitter:description"
                content=" Hello, i’m Mohammed Ibrahim B , a software Engineer with a knack for
                cybersecurity, my prime motivation is excellence and to excel at any
                task. I have an inquisitive mind, thus always seeking new adventures
                and challenges. I&rsquo;m not interested in only developing IT
                solutions, but rather developing safe IT solutions that are imbued
                with cyber security consciousness in both the design and
                implementation."
            />
            <meta property="twitter:image" content={`${me}`} key="og:image" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default HeadComp;
