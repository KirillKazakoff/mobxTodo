import { makeAutoObservable } from 'mobx';

type TodoT = {
    desc: string;
    status: 'done' | 'undone';
};

type PersonDataT = {
    name: string;
    mail: string;
    password: string;
};

type UserInfoT = {
    isRegistred: boolean;
    personalData: PersonDataT;
};

type UserT = {
    userInfo: UserInfoT;
    todos: TodoT[];
};

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

class User {
    user = initialUser;

    constructor() {
        makeAutoObservable(this);
    }

    register(personalData: PersonDataT) {
        this.user.userInfo.personalData = personalData;
        this.user.userInfo.isRegistred = true;
    }
}

export default new User();
