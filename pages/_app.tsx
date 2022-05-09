import '../styles/globals.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@store';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';

type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentType | any;
    };
};

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<p>Loading</p>} persistor={persistor}>
                {Component.PageLayout ? (
                    <Component.PageLayout>
                        <Component {...pageProps} />
                    </Component.PageLayout>
                ) : (
                    <Component {...pageProps} />
                )}
                <ToastContainer
                    position="bottom-right"
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
