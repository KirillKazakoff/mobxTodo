import React from 'react';
import RegistrationForm from './RegistrationForm';
import RegistrationHeader from './RegistrationHeader';
import AuthBtnSubmit from '../../Common/Auth/AuthBtnSubmit';
import AuthSignLink from '../../Common/Auth/AuthSignLink';

export default function RegistrationRoute() {
    return (
        <section className='page page-auth'>
            <RegistrationHeader />
            <main className='content content-auth'>
                <RegistrationForm />
            </main>
            <footer className='footer framed'>
                <AuthBtnSubmit form='registration-form' desc='Register' />
                <AuthSignLink to='/login' desc='Already have an account ?' />
            </footer>
        </section>
    );
}
