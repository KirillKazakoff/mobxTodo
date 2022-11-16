import { UserT } from '../types/types';
import { request } from './request';

type FetchRegisterT = (user: UserT) => Promise<void>;
export const fetchRegister: FetchRegisterT = async (user) => {
    return request({
        settings: {
            method: 'POST',
            body: JSON.stringify(user),
        },
    });
};

type FetchLoginT = (id: string) => Promise<UserT>;
export const fetchLogin: FetchLoginT = async (id) => {
    return request({ url: id });
};
