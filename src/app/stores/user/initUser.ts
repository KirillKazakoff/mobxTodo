import { UserT } from '../../types/types';
import { loadFromLocalStorage } from '../storeLoaderUtils';

const preloadedState = loadFromLocalStorage();
const initialUser: UserT = {
    id: '',
    personalData: {
        name: '',
        mail: '',
        password: '',
    },
    todos: [
        {
            desc: 'Cook Rice and Chicken at 8 am',
            id: '1',
            status: 'done',
        },
        {
            desc: 'Cook Rice and Chicken at 9 am',
            id: '2',
            status: 'undone',
        },
        {
            desc: 'Cook Rice and Chicken at 10 am',
            id: '3',
            status: 'done',
        },
    ],
};

export function initUser() {
    return (preloadedState as UserT) || initialUser;
    // return initialUser;
}

// {
//     "users": [
//         {
//             "id": "username@mail.com",
//             "personalData": {
//                 "name": "username",
//                 "mail": "username@mail.com",
//                 "password": "123",
//                 "checkPassword": "123"
//             },
//             "todos": []
//         }
//     ]
// }
