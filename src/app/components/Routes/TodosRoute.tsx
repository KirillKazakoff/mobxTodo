import React from 'react';
import user from '../../stores/user/userStore';
import NewTodoForm from '../Todos/NewTodoForm';
import TodosForm from '../Todos/TodosForm';
import TodosHeader from '../Todos/TodosHeader';

export default function TodosRoute() {
    console.log(user.user.userInfo.personalData.mail);
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
