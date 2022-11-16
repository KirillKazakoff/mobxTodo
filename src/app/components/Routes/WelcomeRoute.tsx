import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../../stores/user/userStore';

export default function WelcomeRoute() {
    const navigate = useNavigate();

    useEffect(() => {
        if (userStore.isRegistred) {
            navigate('/login');
        }
    });

    return (
        <section className='page page-welcome'>
            <header className='header header-welcome'>
                <img
                    className='img img-done' src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <main className='content content-welcome'>
                <div className='text-container framed'>
                    <div className='title-container'>
                        <span className='title title--sm'>Welcome to</span>
                        <span className='title title--lg text--block text--uppercase'>
                            Our reminder
                        </span>
                    </div>
                    <p className='text'>
                        This application is all about todos. I hope you love creating
                        todos... If you really is, then go forward...
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
