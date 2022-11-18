/* eslint-disable consistent-return */
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';
import NewTodoForm from './NewTodoForm/NewTodoForm';
import TodosForm from './TodosForm/TodosForm';
import TodosHeader from './TodosHeader';
import PageLoader from './PageLoader';

const TodosRoute = observer(() => {
    const navigate = useNavigate();
    const { isLoading } = userStore;

    useEffect(() => {
        if (userStore.isLogined) return;
        if (userStore.isPreloaded) {
            userStore.login(userStore.preloadedState);
            return;
        }

        navigate('/registration');
    }, [isLoading, navigate]);

    if (userStore.isLoading) {
        return <PageLoader cls='page-loader--main' desc='Идет загрузка...' />;
    }

    return (
        <section className='page page-app'>
            <TodosHeader />
            <main className='content content-app framed'>
                <span className='title title-greetings'>Nice to see you!</span>
                <NewTodoForm />
                <TodosForm />
            </main>
        </section>
    );
});

export default TodosRoute;
