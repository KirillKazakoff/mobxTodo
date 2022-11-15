import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import AuthBtnSubmit from '../../Common/Auth/AuthBtnSubmit';
import AuthSignLink from '../../Common/Auth/AuthSignLink';

export default function LoginRoute() {
    return (
        <section className='page page-auth'>
            <LoginHeader />
            <main className='content content-auth framed'>
                <LoginForm />
            </main>
            <footer className='footer framed'>
                <AuthBtnSubmit form='login-form' desc='Login' />
                <AuthSignLink to='/registration' desc="Don't have an acount? Sign up" />
            </footer>
        </section>
    );
}
