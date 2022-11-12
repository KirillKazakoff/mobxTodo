import React from 'react';

export default function RegistrationRoute() {
    return (
        <section className='main main-auth'>
            <header className='header header-auth'>
                <img
                    className='img img-done--sm' src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <main className='content'>
                <div className='text-container framed'>
                    <div className='title-container'>
                        <span className='title'>{"Get's things done with"}</span>
                        <span className='title title-todo text--uppercase'>todo</span>
                    </div>
                </div>
                <form className='form form-auth framed'>
                    <ul className='form__controls'>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Enter your name'
                            />
                        </li>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Enter your name'
                            />
                        </li>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Enter your name'
                            />
                        </li>
                        <li className='form__control'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Enter your name'
                            />
                        </li>
                    </ul>
                </form>
            </main>

            <footer className='footer framed'>
                <button type='button' className='btn btn-next-section'>
                    Get Start
                </button>
                <div className='footer__sign-in-container'>
                    <span className='footer__sign-in-desc'>
                        Already have an account ?
                    </span>
                    <a href='/#' className='footer__sign-in-link'>
                        Sign In
                    </a>
                </div>
            </footer>
        </section>
    );
}
