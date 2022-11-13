import React from 'react';
import { Link } from 'react-router-dom';

export default function TodosHeader() {
    return (
        <header className='header header-app framed'>
            <div className='title-container'>
                <span className='title title-name title--lg text--block'>
                    Monica Belucci
                </span>
                <span className='title title-email title--sm'>@monicabelucci</span>
            </div>
            <button type='button' className='btn btn-logout'>
                <Link to='/welcome'>Log Out</Link>
            </button>
        </header>
    );
}
