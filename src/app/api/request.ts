import { RequestObjT } from '../types/types';
import pageStatusStore from '../stores/user/pageStatusStore';

const prodUrl = 'https://todolistserver.onrender.com/users';
const devUrl = 'http://localhost:9092/users';
const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;

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
        if (!res.ok) throw new Error(res.status.toString());

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);
        return resData;
    } catch (e) {
        console.log(e.message);

        if (e.message === 'Failed to fetch') {
            pageStatusStore.setStatus(e.message);
        }
        if (e.message === 'Not Found') {
            pageStatusStore.setStatus(e.message);
        }

        throw new Error(e.message as string);
    }
};
