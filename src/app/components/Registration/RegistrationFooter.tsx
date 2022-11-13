import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationFooter() {
    return (
        <footer className='footer framed'>
            <button type='button' className='btn btn-next-section'>
                <Link to='/todos'>Register</Link>
            </button>
            <div className='footer__sign-in-container'>
                <span className='footer__sign-in-desc'>Already have an account ?</span>
                <Link to='/login' className='footer__sign-in-link'>
                    Sign In
                </Link>
            </div>
        </footer>
    );
}
