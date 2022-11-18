// const initialUser: UserT = {
//     id: 'username1@mail.com',
//     personalData: {
//         name: 'username1@mail.com',
//         mail: 'username1@mail.com',
//         password: '123',
//     },
//     todos: [],
// };

import { UserT } from '../../types/types';

export function initUser() {
    const initialUser: UserT = {
        id: '',
        personalData: {
            name: '',
            mail: '',
            password: '',
        },
        todos: [],
    };

    return initialUser;
}
