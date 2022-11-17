/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { makeAutoObservable, runInAction } from 'mobx';
import { fetchCheckTodo, fetchDeleteTodo } from '../../api/api';
import { FilterTypeT, TodoT } from '../../types/types';
import userStore from './userStore';

class TodosStore {
    status: FilterTypeT = 'all';

    constructor() {
        makeAutoObservable(this);
    }

    setFilter(filter: FilterTypeT) {
        this.status = filter;
    }

    get todos() {
        const { todos } = userStore.user;
        if (this.status === 'all') return todos;
        const boolStatus = this.status === 'done';

        return todos.filter((todo) => todo.isChecked === boolStatus);
    }

    async checkTodo(todo: TodoT) {
        todo.isChecked = !todo.isChecked;
        await fetchCheckTodo(userStore.user.id, todo.id);
    }

    async deleteTodo(todo: TodoT) {
        await fetchDeleteTodo(userStore.user.id, todo.id);
        const indexTodo = this.todos.indexOf(todo);
        runInAction(() => {
            this.todos.splice(indexTodo, 1);
        });
    }
}

const todosStore = new TodosStore();
export default todosStore;
