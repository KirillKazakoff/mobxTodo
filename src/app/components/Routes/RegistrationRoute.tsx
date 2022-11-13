import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationRoute() {
    return (
        <section className='page page-auth'>
            <header className='header header-auth'>
                <img
                    className='img img-done img-done--sm'
                    src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <main className='content content-auth'>
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
                                type='text'
                                className='input-text'
                                placeholder='Enter your name'
                            />
                        </li>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input-text'
                                placeholder='Enter your name'
                            />
                        </li>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input-text'
                                placeholder='Enter your name'
                            />
                        </li>
                    </ul>
                </form>
            </main>

            <footer className='footer framed'>
                <button type='button' className='btn btn-next-section'>
                    <Link to='/todos'>Register</Link>
                </button>
                <div className='footer__sign-in-container'>
                    <span className='footer__sign-in-desc'>
                        Already have an account ?
                    </span>
                    <Link to='/login' className='footer__sign-in-link'>
                        Sign In
                    </Link>
                </div>
            </footer>
        </section>
    );
}
