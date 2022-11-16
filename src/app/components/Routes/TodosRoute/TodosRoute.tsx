import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodosForm from './TodosForm/TodosForm';
import TodosHeader from './TodosHeader';

export default function TodosRoute() {
    return (
        <section className='page page-app'>
            <TodosHeader />
            <main className='content content-app framed'>
                <span className='title title-time'>Good Afternoon !</span>
                <NewTodoForm />
                <TodosForm />
            </main>
        </section>
    );
}
