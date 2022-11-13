import React from 'react';

export default function RegistrationForm() {
    return (
        <form className='form form-auth framed'>
            <ul className='form__controls'>
                <li className='form__control'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Enter your name'
                    />
                </li>
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
                        placeholder='Enter password'
                    />
                </li>
                <li className='form__control'>
                    <input
                        type='password'
                        className='input-text'
                        placeholder='Confirm Password'
                    />
                </li>
            </ul>
        </form>
    );
}
