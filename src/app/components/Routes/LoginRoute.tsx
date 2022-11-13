import React from 'react';
import LoginForm from '../Login/LoginForm';
import LoginFooter from '../Login/LoginFooter';
import LoginHeader from '../Login/LoginHeader';

export default function LoginRoute() {
    return (
        <section className='page page-auth'>
            <LoginHeader />
            <main className='content content-auth framed'>
                <LoginForm />
            </main>
            <LoginFooter />
        </section>
    );
}
