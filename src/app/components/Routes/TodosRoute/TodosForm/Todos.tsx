import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoT } from '../../../../types/types';
import BtnRemoveTodo from './BtnRemoveTodo';
import todosStore from '../../../../stores/user/todosStore';

const Todos = observer(() => {
    const onChange = (todo: TodoT) => () => {
        todosStore.checkTodo(todo);
    };
    const onClick = (todo: TodoT) => async () => {
        await todosStore.deleteTodo(todo);
    };

    const todos = todosStore.todos.map((todo) => {
        return (
            <li className='todo' key={todo.id}>
                <input
                    className='todo__checkbox'
                    type='checkbox'
                    checked={todo.isChecked}
                    onChange={onChange(todo)}
                />
                <span className='todo__desc'>{todo.desc}</span>
                <BtnRemoveTodo removeCb={onClick(todo)} />
            </li>
        );
    });
    return <ul className='todos'>{todos}</ul>;
});
export default Todos;
