import { makeAutoObservable } from 'mobx';
import { PersonDataT } from '../../types/types';
import { saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';

class UserStore {
    user = initUser();

    constructor() {
        makeAutoObservable(this);
        window.addEventListener('beforeunload', () => saveToLocalStorage(this.user));
    }

    register(data: PersonDataT) {
        this.user.userInfo.personalData = data;
        this.user.userInfo.isRegistred = true;
    }

    login(data: typeof this.loginInfo) {
        const { mail, password } = this.loginInfo;

        if (data.mail === mail && data.password === password) {
            return true;
        }
        return false;
    }

    get header() {
        const { name, mail } = this.user.userInfo.personalData;
        return { name, mail };
    }

    get loginInfo() {
        const { mail, password } = this.user.userInfo.personalData;
        return { mail, password };
    }
}
export default new UserStore();
