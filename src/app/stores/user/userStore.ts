import { makeAutoObservable } from 'mobx';
import { loadFromLocalStorage, saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';
import { LoginT, PersonalDataT, UserT } from '../../types/types';
import { fetchRegister, fetchLogin } from '../../api/api';

const preloadedState = loadFromLocalStorage();

class UserStore {
    // user = (preloadedState as UserT) || initUser();
    user = initUser();

    constructor() {
        makeAutoObservable(this);
        window.addEventListener('beforeunload', () => saveToLocalStorage(this.user));
    }

    async register(data: PersonalDataT) {
        this.user = initUser();
        this.user.personalData = data;
        this.user.id = data.mail;
        return fetchRegister(this.user);
    }

    async login(data: LoginT) {
        const { mail, password } = this.loginInfo;
        if (data.mail === mail && data.password === password) {
            return true;
        }
        const user = await fetchLogin(data.mail);

        if (user.personalData.password !== data.password) {
            throw new Error('Auth Failed');
        }

        this.user = user;
        return true;
    }

    get loginInfo() {
        const { mail, password } = this.user.personalData;
        return { mail, password };
    }

    get id() {
        return this.user.id;
    }
}

const userStore = new UserStore();
export default userStore;
