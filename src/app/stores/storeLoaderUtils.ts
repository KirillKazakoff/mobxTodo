import { UserT, PersonalDataT } from '../types/types';

export const saveToLocalStorage = (state: PersonalDataT) => {
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
        return stateStr ? (JSON.parse(stateStr) as PersonalDataT) : undefined;
    } catch (e) {
        return undefined;
    }
};
