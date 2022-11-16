import { observer } from 'mobx-react-lite';
import React from 'react';
import filterStore from '../../../../stores/user/filterStore';
import Filtration from '../Filtration/Filtration';
import BtnAddTodo from './BtnAddTodo';
import Todos from './Todos';

const TodosForm = observer(() => {
    return (
        <form className='form form-tasks'>
            <span className='form-tasks__title'>Tasks List</span>
            <div className='form-tasks__container'>
                <header className='form-tasks__header'>
                    <Filtration />
                    <span className='form-tasks__header-desc'>Add</span>
                    <BtnAddTodo />
                </header>
                <Todos data={filterStore.todos} />
            </div>
        </form>
    );
});
export default TodosForm;
