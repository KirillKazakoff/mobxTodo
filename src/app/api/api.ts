import { UserT } from '../types/types';
import { request } from './request';

export const fetchRegister = async (user: UserT) => {
    return request({
        settings: {
            method: 'POST',
            body: JSON.stringify(user),
        },
    });
};

export const fetchLogin = async (id: string) => {
    return request({ url: id });
};
