import React from 'react';

export default function RegistrationHeader() {
    return (
        <header className='header header-auth'>
            <img
                className='img img-done img-done--sm'
                src='./img/done.png'
                alt='done-img'
            />
            <div className='text-container framed'>
                <div className='title-container'>
                    <span className='title title--lg'>{"Get's things done"}</span>
                    <div className='text-container'>
                        <span className='title title--lg'>with</span>
                        <span className='title title-todo title--lg text--uppercase'>
                            todo
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
