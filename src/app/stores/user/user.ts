import { makeAutoObservable } from 'mobx';
import { PersonDataT } from '../../types/types';
import { saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';

class User {
    user = initUser();

    constructor() {
        makeAutoObservable(this);
        window.addEventListener('beforeunload', () => saveToLocalStorage(this.user));
    }

    register(personalData: PersonDataT) {
        this.user.userInfo.personalData = personalData;
        this.user.userInfo.isRegistred = true;
    }
}
export default new User();
