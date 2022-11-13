import React from 'react';

export default function LoginForm() {
    return (
        <form className='form form-auth form-auth-login'>
            <ul className='form__controls form__controls-login'>
                <li className='form__control'>
                    <input
                        type='mail'
                        className='input-text'
                        placeholder='Enter your email'
                    />
                </li>
                <li className='form__control'>
                    <input
                        type='password'
                        className='input-text'
                        placeholder='Enter your password'
                    />
                </li>
            </ul>
        </form>
    );
}
