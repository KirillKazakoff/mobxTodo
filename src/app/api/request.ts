import { RequestObjT } from '../types/types';
import pageStatusStore from '../stores/user/pageStatusStore';

const baseUrl = 'http://localhost:9092/users';

export function timeoutMock(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), timeout);
    });
}

export const request = async (reqObj?: RequestObjT) => {
    const url = reqObj?.url ? `${baseUrl}/${reqObj.url}` : baseUrl;
    const settings = reqObj?.settings || {
        method: 'GET',
    };

    settings.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        await timeoutMock(1000);

        const res = await fetch(url, settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);
        return resData;
    } catch ({ message }) {
        if (message === 'Failed to fetch') {
            pageStatusStore.setStatus(message);
        }
        if (message === 'Not Found') {
            pageStatusStore.setStatus(message);
        }

        throw new Error(message as string);
    }
};
