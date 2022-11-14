import { makeAutoObservable } from 'mobx';

type TodoT = {
    desc: string;
    status: 'done' | 'undone';
};

type UserInfoT = {
    isRegistred: boolean;
    name: string;
    mail: string;
    password: string;
};

type UserT = {
    userInfo: UserInfoT;
    todos: TodoT[];
};

const initialUser: UserT = {
    userInfo: {
        isRegistred: false,
        name: '',
        mail: '',
        password: '',
    },
    todos: [],
};

class User {
    user = initialUser;

    constructor() {
        makeAutoObservable(this);
    }

    login(userInfo: UserInfoT) {
        this.user.userInfo = userInfo;
    }
}

export default new User();
