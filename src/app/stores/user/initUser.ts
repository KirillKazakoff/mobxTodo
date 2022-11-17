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
