import { observer } from 'mobx-react-lite';
import React from 'react';
import todosStore from '../../../../stores/user/todosStore';
import Filtration from '../Filtration/Filtration';
import BtnAddTodo from './BtnAddTodo';
import Todos from './Todos';

const TodosForm = observer(() => {
    if (todosStore.isAddingTodo) return null;

    return (
        <form className='form form-todos'>
            <span className='form-todos__title'>Todo List</span>
            <div className='form-todos__container'>
                <header className='form-todos__header'>
                    <Filtration />
                    <span className='form-todos__header-desc'>Add</span>
                    <BtnAddTodo />
                </header>
                <Todos />
            </div>
        </form>
    );
});
export default TodosForm;
