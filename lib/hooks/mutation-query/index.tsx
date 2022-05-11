import { useState } from 'react';
import Toast from '@utils/toast';

// eslint-disable-next-line no-unused-vars
function useMutation<T, Q>(): [T, (url: string, data: Q) => Promise<T | undefined> | undefined] {
    const [resData, setResData] = useState<T>();

    async function ApiCall(url: string, data: Q) {
        console.log(url);
        try {
            const response = await fetch(url, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const res: T = await response.json();
            setResData(() => res);
            return res;
        } catch (error) {
            // usually toast the error as a message
            console.log('in funcrrrrrrrr', error);
            Toast(error as unknown as string, { type: 'error' });
        }
    }

    return [resData as T, (url: string, data: Q) => ApiCall(url, data)];
}

export default useMutation;
