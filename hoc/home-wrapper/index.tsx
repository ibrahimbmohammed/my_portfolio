import type { NextPageContext } from 'next';
import { WebsiteAboutPagesQuery } from '../../types/generated';
import { applyTheme } from '../../theme/utils';
import { getCookie, setCookie } from '../../utils/cookies';

function withWrapper(WrappedComponent: any) {
    // TODO : make this a function, params: url, setFunc, toast
    // after the first query, we can store the theme data anywhere
    async function ApiCall() {
        try {
            if (typeof window !== 'undefined') {
                const themeData = getCookie('theme');
                if (themeData === undefined || themeData === null) {
                    const response = await fetch('/api/theme');
                    const data: WebsiteAboutPagesQuery = await response.json();
                    applyTheme(data as string);
                    const websiteTheme = JSON.stringify(data);
                    setCookie('theme', websiteTheme as string);
                } else if (themeData) {
                    const localWebsiteTheme = JSON.parse(themeData as string);
                    applyTheme(localWebsiteTheme);
                }
            }
        } catch (e) {
            // usually toast the error as a message
            console.log('error', e);
        }
    }
    ApiCall();

    const withThing = (props: any) => {
        return (
            <>
                <nav className="h-8 w-full flex items-center justify-center">
                    {' '}
                    <p className="font-semibold text-red-600">nav</p>{' '}
                </nav>
                <WrappedComponent {...props} />
                <footer className="h-8 w-full flex items-center justify-center">
                    <p className="font-semibold text-blue-600">footer</p>
                </footer>
            </>
        );
    };

    withThing.getInitialProps = async ({ req }: NextPageContext) => {
        const userAgent = req?.headers.host;
        return { userAgent };
    };

    return withThing;
}
export default withWrapper;
