import { useState, useEffect } from 'react';
import Toast from '@utils/toast';

const useFetchQuery = <T,>(url: string) => {
    const [resData, setResData] = useState<T>();

    async function ApiCall() {
        try {
            const response = await fetch(url);
            const data: T = await response.json();
            setResData({ ...data });
        } catch (error) {
            // usually toast the error as a message
            Toast(error as unknown as string, { type: 'error' });
        }
    }

    useEffect(() => {
        ApiCall();
    }, []);
    return [resData];
};

export default useFetchQuery;
