import { makeAutoObservable } from 'mobx';
import { loadFromLocalStorage, saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';
import { LoginT, PersonalDataT } from '../../types/types';
import { fetchRegister, fetchLogin } from '../../api/api';

class UserStore {
    isLoading = false;

    preloadedState = loadFromLocalStorage();

    user = initUser();

    constructor() {
        makeAutoObservable(this);
        window.addEventListener('unload', () => {
            saveToLocalStorage(this.user.personalData);
        });
        window.addEventListener('visibilitychange', () => this.refetch());
    }

    async register(data: PersonalDataT) {
        this.user = initUser();
        this.user.personalData = data;
        this.user.id = data.mail;
        return fetchRegister(this.user);
    }

    async login(data: LoginT) {
        try {
            this.isLoading = true;
            const user = await fetchLogin(data.mail);
            if (user.personalData.password !== data.password) {
                throw new Error('Auth Failed');
            }

            this.user = user;
            return true;
        } finally {
            this.isLoading = false;
        }
    }

    refetch() {
        if (!this.isLogined) return;
        this.login(this.loginInfo);
    }

    get loginInfo() {
        const { mail, password } = this.user.personalData;
        return { mail, password };
    }

    get id() {
        return this.user.id;
    }

    get isPreloaded() {
        return !!this.preloadedState?.mail;
    }

    get isLogined() {
        return !!this.loginInfo.mail;
    }
}

const userStore = new UserStore();
export default userStore;
