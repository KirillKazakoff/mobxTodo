import { UserT, TodoT } from '../types/types';
import { request } from './request';

type FetchRegisterT = (user: UserT) => Promise<void>;
export const fetchRegister: FetchRegisterT = async (user) => {
    return request({
        settings: {
            method: 'POST',
            body: JSON.stringify(user),
        },
    });
};

type FetchLoginT = (id: string) => Promise<UserT>;
export const fetchLogin: FetchLoginT = async (id) => {
    try {
        return await request({ url: id });
    } catch (e) {
        throw new Error('notFound');
    }
};

export const fetchDeleteTodo = async (idUser: string, idTodo: string) => {
    await request({
        url: `${idUser}/${idTodo}`,
        settings: {
            method: 'DELETE',
        },
    });
};

export const fetchCheckTodo = async (idUser: string, todo: TodoT) => {
    await request({
        url: `${idUser}/todos/${todo.id}`,
        settings: {
            method: 'PUT',
            body: JSON.stringify(todo),
        },
    });
};
