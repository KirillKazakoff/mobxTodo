import React from 'react';

export default function LoginHeader() {
    return (
        <header className='header header-auth'>
            <img
                className='img img-done img-done--sm'
                src='./img/done.png'
                alt='done-img'
            />
            <div className='title-container'>
                <span className='title title--sm'>Welcome back to</span>
                <span className='title title--lg text--uppercase text--block'>
                    Our reminder
                </span>
            </div>
        </header>
    );
}
