import { observer } from 'mobx-react-lite';
import React from 'react';
import NewTodoForm from './NewTodoForm/NewTodoForm';
import TodosForm from './TodosForm/TodosForm';
import TodosHeader from './TodosHeader';

const TodosRoute = observer(() => {
    return (
        <section className='page page-app'>
            <TodosHeader />
            <main className='content content-app framed'>
                <span className='title title-greetings'>Nice to see you !</span>
                <NewTodoForm />
                <TodosForm />
            </main>
        </section>
    );
});

export default TodosRoute;
