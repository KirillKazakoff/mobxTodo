/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from 'mobx';
import { saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';
import { LoginT, PersonalDataT, TodoT } from '../../types/types';
import { fetchRegister, fetchLogin, fetchCheckTodo } from '../../api/api';

class UserStore {
    user = initUser();

    constructor() {
        makeAutoObservable(this);
        window.addEventListener('beforeunload', () => saveToLocalStorage(this.user));
    }

    async register(data: PersonalDataT) {
        this.user.personalData = data;
        this.user.id = data.mail;
        return fetchRegister(this.user);
    }

    async login(data: LoginT) {
        const { mail, password } = this.loginInfo;

        // if (data.mail === mail && data.password === password) {
        //     return true;
        // }
        const user = await fetchLogin(data.mail);

        if (user.personalData.password !== data.password) {
            throw new Error('loginFailed');
        }

        this.user = user;
        return true;
    }

    async checkTodo(todo: TodoT) {
        // eslint-disable-next-line no-param-reassign
        todo.isChecked = !todo.isChecked;
        await fetchCheckTodo(this.user.id, todo);
    }

    get header() {
        const { name, mail } = this.user.personalData;
        return { name, mail };
    }

    get loginInfo() {
        const { mail, password } = this.user.personalData;
        return { mail, password };
    }

    get isRegistred() {
        return !!this.user.id;
    }
}

const userStore = new UserStore();
export default userStore;
