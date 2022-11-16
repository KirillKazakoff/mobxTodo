import { makeAutoObservable } from 'mobx';
import { FilterTypeT } from '../../types/types';
import userStore from './userStore';

class FilterStore {
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
}

const filterStore = new FilterStore();
export default filterStore;
