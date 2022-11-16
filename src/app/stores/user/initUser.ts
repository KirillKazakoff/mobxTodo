import { UserT } from '../../types/types';
import { loadFromLocalStorage } from '../storeLoaderUtils';

// const preloadedState = loadFromLocalStorage();
// const preloadedState;
const initialUser: UserT = {
    id: '',
    personalData: {
        name: '',
        mail: '',
        password: '',
    },
    todos: [],
};

export function initUser() {
    // return (preloadedState as UserT) || initialUser;
    return initialUser;
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
