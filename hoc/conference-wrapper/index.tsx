import type { NextPageContext } from 'next';

function withWrapper(WrappedComponent: any) {
    const withThing = (props: any) => {
        return <WrappedComponent {...props} />;
    };

    withThing.getInitialProps = async ({ req }: NextPageContext) => {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent };
    };

    return withThing;
}
export default withWrapper;
