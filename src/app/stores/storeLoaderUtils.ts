import { UserT } from '../types/types';

export const saveToLocalStorage = (state: UserT) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
        return true;
    } catch (e) {
        return false;
    }
};

export const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        return undefined;
    }
};
