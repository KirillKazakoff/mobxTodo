import React from 'react';
import AuthImg from '../../Common/Auth/AuthImg';

export default function RegistrationHeader() {
    return (
        <header className='header header-auth'>
            <AuthImg />

            <div className='title-container framed'>
                <span className='title title--lg'>{"Get's things done"}</span>
                <div className='text-container'>
                    <span className='title title--lg'>with</span>
                    <span className='title title-todo title--lg text--uppercase'>
                        todo
                    </span>
                </div>
            </div>
        </header>
    );
}
