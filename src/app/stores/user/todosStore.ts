/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { makeAutoObservable, runInAction } from 'mobx';
import { fetchCheckTodo, fetchDeleteTodo, fetchAddTodo } from '../../api/api';
import { FilterTypeT, TodoT } from '../../types/types';
import userStore from './userStore';

class TodosStore {
    status: FilterTypeT = 'all';

    isAddingTodo = false;

    todos = userStore.user.todos;

    constructor() {
        makeAutoObservable(this);
    }

    toggleNewTodoForm() {
        this.isAddingTodo = !this.isAddingTodo;
    }

    setFilter(filter: FilterTypeT) {
        this.status = filter;
    }

    get todosFiltered() {
        if (this.status === 'all') return this.todos;
        const boolStatus = this.status === 'done';

        return this.todos.filter((todo) => todo.isChecked === boolStatus);
    }

    async checkTodo(todo: TodoT) {
        todo.isChecked = !todo.isChecked;
        await fetchCheckTodo(userStore.id, todo.id);
    }

    async deleteTodo(todo: TodoT) {
        await fetchDeleteTodo(userStore.id, todo.id);
        const indexTodo = this.todos.indexOf(todo);

        runInAction(() => {
            this.todos.splice(indexTodo, 1);
        });
    }

    async addTodo(todo: TodoT) {
        await fetchAddTodo(userStore.id, todo);
        userStore.user.todos.push(todo);
        // ?
    }
}

const todosStore = new TodosStore();
export default todosStore;
