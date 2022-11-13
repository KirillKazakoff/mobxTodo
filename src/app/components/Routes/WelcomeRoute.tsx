import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeRoute() {
    return (
        <section className='page page-welcome'>
            <header className='header-welcome'>
                <img
                    className='img img-done' src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <main className='content'>
                <div className='text-container framed'>
                    <div className='title-container'>
                        <span className='title'>Welcome to</span>
                        <span className='title text--block text--uppercase'>
                            Our reminder
                        </span>
                    </div>
                    <p className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
                        dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
                        Hello my friend
                    </p>
                </div>
            </main>

            <footer className='footer footer-welcome framed'>
                <button type='button' className='btn btn-next-section'>
                    <Link to='/registration'>Get Start</Link>
                </button>
            </footer>
        </section>
    );
}
