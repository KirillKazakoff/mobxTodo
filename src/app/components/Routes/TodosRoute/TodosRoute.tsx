import React from 'react';
import userStore from '../../../stores/user/userStore';
import NewTodoForm from './NewTodoForm';
import TodosForm from './TodosForm';
import TodosHeader from './TodosHeader';

export default function TodosRoute() {
    console.log(userStore.user.personalData.mail);
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
