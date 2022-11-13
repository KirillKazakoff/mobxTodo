import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginFooter() {
    return (
        <footer className='footer framed'>
            <button type='button' className='btn btn-next-section'>
                <Link to='/todos'>Get Start</Link>
            </button>
            <div className='footer__sign-in-container'>
                <span className='footer__sign-in-desc'>{"Don't have an account ?"}</span>
                <Link to='/registration' className='footer__sign-in-link'>
                    Sign Up
                </Link>
            </div>
        </footer>
    );
}
