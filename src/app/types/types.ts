// UserT
export type TodoT = {
    desc: string;
    status: 'done' | 'undone';
};
export type PersonDataT = {
    name: string;
    mail: string;
    password: string;
};
export type UserInfoT = {
    isRegistred: boolean;
    personalData: PersonDataT;
};
export type UserT = {
    userInfo: UserInfoT;
    todos: TodoT[];
};
