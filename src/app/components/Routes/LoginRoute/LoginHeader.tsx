import React from 'react';
import AuthImg from '../../Common/Auth/AuthImg';

export default function LoginHeader() {
    return (
        <header className='header header-auth'>
            <AuthImg />
            <div className='title-container framed'>
                <span className='title title--sm'>Welcome back to</span>
                <span className='title title--lg text--uppercase text--block'>
                    Our reminder
                </span>
            </div>
        </header>
    );
}
