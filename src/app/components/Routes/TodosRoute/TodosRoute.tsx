import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';
import NewTodoForm from './NewTodoForm/NewTodoForm';
import TodosForm from './TodosForm/TodosForm';
import TodosHeader from './TodosHeader';

const TodosRoute = observer(() => {
    const navigate = useNavigate();
    const { id } = userStore;
    useEffect(() => {
        if (!id) {
            navigate('/registration');
        }
    });

    return (
        <section className='page page-app'>
            <TodosHeader />
            <main className='content content-app framed'>
                <span className='title title-greetings'>Nice to see you again!</span>
                <NewTodoForm />
                <TodosForm />
            </main>
        </section>
    );
});

export default TodosRoute;
