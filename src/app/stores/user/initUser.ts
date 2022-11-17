import { UserT } from '../../types/types';

const initialUser: UserT = {
    id: 'username1@mail.com',
    personalData: {
        name: 'username1',
        mail: 'username1@mail.com',
        password: '123',
    },
    todos: [
        {
            desc: 'Cook Rice and Chicken at 8 am',
            id: '1',
            isChecked: true,
        },
        {
            desc: 'Cook Rice and Chicken at 9 am',
            id: '2',
            isChecked: false,
        },
        {
            desc: 'Cook Rice and Chicken at 10 am',
            id: '3',
            isChecked: true,
        },
    ],
};

export function initUser() {
    return initialUser;
}

// import { UserT } from '../../types/types';
// import { loadFromLocalStorage } from '../storeLoaderUtils';

// const preloadedState = loadFromLocalStorage();
// const initialUser: UserT = {
//     id: '',
//     personalData: {
//         name: '',
//         mail: '',
//         password: '',
//     },
//     todos: [
//         {
//             desc: 'Cook Rice and Chicken at 8 am',
//             id: '1',
//             isChecked: true,
//         },
//         {
//             desc: 'Cook Rice and Chicken at 9 am',
//             id: '2',
//             isChecked: false,
//         },
//         {
//             desc: 'Cook Rice and Chicken at 10 am',
//             id: '3',
//             isChecked: true,
//         },
//     ],
// };

// export function initUser() {
//     return (preloadedState as UserT) || initialUser;
// }
