import { UserT } from '../../types/types';
import { loadFromLocalStorage } from '../storeLoaderUtils';

const preloadedState = loadFromLocalStorage();
const initialUser: UserT = {
    userInfo: {
        isRegistred: false,
        personalData: {
            name: '',
            mail: '',
            password: '',
        },
    },
    todos: [],
};

export function initUser() {
    return preloadedState || initialUser;
}
