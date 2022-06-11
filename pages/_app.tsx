/* eslint-disable no-nested-ternary */
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.min.css';
import { persistor, store } from '@store';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import LoadingScreen from '@atoms/a-loading-screen';
import HeadComp from '@molecules/m-head';
// import '@fortawesome/fontawesome-free/css/all.min.css';

type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentType | any;
    };
};

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, []);
    <HeadComp />;
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                {loading ? <Component {...pageProps} /> : <LoadingScreen />}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </PersistGate>
        </Provider>
    );
};

export default MyApp;
