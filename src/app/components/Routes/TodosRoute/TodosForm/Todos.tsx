import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoT } from '../../../../types/types';
import userStore from '../../../../stores/user/userStore';

type Props = { data: TodoT[] };

const Todos = observer(({ data }: Props) => {
    const onChange = (todo: TodoT) => () => {
        userStore.checkTodo(todo);
    };
    const todos = data.map((todo) => {
        return (
            <li className='todo' key={todo.id}>
                <input
                    className='todo__checkbox'
                    type='checkbox'
                    checked={todo.isChecked}
                    onChange={onChange(todo)}
                />
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
});
export default Todos;
// export default function Todos({ data }: Props) {
//     const onChange = (todo: TodoT) => () => {
//         // eslint-disable-next-line no-param-reassign
//         todo.isChecked = !todo.isChecked;
//         console.log(todo);
//     };
//     const todos = data.map((todo) => {
//         return (
//             <li className='todo' key={todo.id}>
//                 <input
//                     className='todo__checkbox'
//                     type='checkbox'
//                     checked={todo.isChecked}
//                     onChange={onChange(todo)}
//                 />
//                 <span className='todo__desc'>{todo.desc}</span>
//                 <button type='button' className='btn btn-remove'>
//                     <img
//                         src='./svg/remove.svg'
//                         alt='remove-icon'
//                         className='svg svg-remove svg--scale'
//                     />
//                 </button>
//             </li>
//         );
//     });
//     return <ul className='todos'>{todos}</ul>;
// }
