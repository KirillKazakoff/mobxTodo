import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginRoute() {
    return (
        <section className='page page-auth'>
            <header className='header header-auth'>
                <img
                    className='img img-done img-done--sm'
                    src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <main className='content content-auth framed'>
                <div className='title-container'>
                    <span className='title title--sm'>Welcome back to</span>
                    <span className='title title--lg text--uppercase text--block'>
                        Our reminder
                    </span>
                </div>
                <form className='form form-auth form-auth-login'>
                    <ul className='form__controls form__controls-login'>
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
                    <Link to='/todos'>Get Start</Link>
                </button>
                <div className='footer__sign-in-container'>
                    <span className='footer__sign-in-desc'>
                        {"Don't have an account ?"}
                    </span>
                    <Link to='/registration' className='footer__sign-in-link'>
                        Sign Up
                    </Link>
                </div>
            </footer>
        </section>
    );
}
