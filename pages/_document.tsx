import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
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
                <link rel="icon" href="/images/mic.jpg" />

                <meta name="title" content="My Portfolio Website" />

                <meta
                    property="og:image"
                    content="https://i.ibb.co/xfdt3Xt/1644326557243-1.jpg"
                    key="og:image"
                />

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
                <meta
                    property="og:image"
                    content="https://i.ibb.co/xfdt3Xt/1644326557243-1.jpg"
                    key="og:image"
                />

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
                <meta
                    property="twitter:image"
                    content="https://i.ibb.co/xfdt3Xt/1644326557243-1.jpg"
                    key="og:image"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fascinate&family=Montserrat:wght@200;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
