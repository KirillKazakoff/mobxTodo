import React from 'react';
import RegistrationFooter from '../Registration/RegistrationFooter';
import RegistrationForm from '../Registration/RegistrationForm';
import RegistrationHeader from '../Registration/RegistrationHeader';

export default function RegistrationRoute() {
    return (
        <section className='page page-auth'>
            <RegistrationHeader />
            <main className='content content-auth'>
                <RegistrationForm />
            </main>
            <RegistrationFooter />
        </section>
    );
}
