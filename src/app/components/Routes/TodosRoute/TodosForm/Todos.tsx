import React from 'react';
import { TodoT } from '../../../../types/types';

type Props = { data: TodoT[] };
export default function Todos({ data }: Props) {
    const todos = data.map((todo) => {
        return (
            <li className='todo' key={todo.id}>
                <input className='todo__checkbox' type='checkbox' />
                <span className='todo__desc'>{todo.desc}</span>
                <button type='button' className='btn btn-remove'>
                    <img
                        src='./svg/remove.svg'
                        alt='remove-icon'
                        className='svg svg-remove svg--scale'
                    />
                </button>
            </li>
        );
    });
    return <ul className='todos'>{todos}</ul>;
}
