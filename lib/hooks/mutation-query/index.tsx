/* eslint-disable no-unused-vars */
import { useState } from 'react';

const usePosTQuery = <T, U>(): [
    T,
    (url: string, data: U) => Promise<T | undefined> | undefined,
] => {
    const [resData, setResData] = useState<T>();

    async function ApiCall(url: string, data: U) {
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res: T = await response.json();
        setResData(() => res);
        if (response.status !== 200) {
            throw res && res;
        }
        return res;
    }

    return [resData as T, (url: string, data: U) => ApiCall(url, data)];
};

export default usePosTQuery;
