import { observer } from 'mobx-react-lite';
import React from 'react';
import todosStore from '../../../../stores/user/todosStore';

const BtnAddTodo = observer(() => {
    const onClick = () => todosStore.toggleNewTodoForm();

    return (
        <button
            type='button' className='btn btn-add'
            onClick={onClick}
        >
            <img
                src='./svg/plus.svg' alt='add-icon'
                className='svg svg-add'
            />
        </button>
    );
});

export default BtnAddTodo;
