import React from 'react';

export default function WelcomeRoute() {
    return (
        <section className='main main-welcome'>
            <header className='header header-welcome'>
                <img
                    className='img img-done' src='./img/done.png'
                    alt='done-img'
                />
            </header>
            <div className='text-container framed'>
                <div className='title-container'>
                    <span className='title'>Welcome to</span>
                    <span className='title title--lg text--uppercase'>Our reminder</span>
                </div>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
                    dictum tempus, interdum at dignissim metus. Ultricies sed nunc. Hello
                    my friend
                </p>
            </div>
            <footer className='footer footer-welcome framed'>
                <button type='button' className='btn btn-next-section'>
                    Get Start
                </button>
            </footer>
        </section>
    );
}
