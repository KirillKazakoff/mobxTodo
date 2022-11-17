/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { saveToLocalStorage } from '../storeLoaderUtils';
import { initUser } from './initUser';
import { LoginT, PersonalDataT, TodoT } from '../../types/types';
import {
    fetchRegister,
    fetchLogin,
    fetchCheckTodo,
    fetchDeleteTodo,
} from '../../api/api';

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
        todo.isChecked = !todo.isChecked;
        await fetchCheckTodo(this.user.id, todo.id);
    }

    async deleteTodo(todo: TodoT) {
        await fetchDeleteTodo(this.user.id, todo.id);
        const indexTodo = this.user.todos.indexOf(todo);
        runInAction(() => {
            this.user.todos.splice(indexTodo, 1);
        });
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
