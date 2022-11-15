import React from 'react';
import { Link } from 'react-router-dom';
import userStore from '../../stores/user/userStore';

export default function TodosHeader() {
    const { name, mail } = userStore.header;
    return (
        <header className='header header-app framed'>
            <div className='title-container'>
                <span className='title title-name title--lg text--block'>{name}</span>
                <span className='title title-email title--sm'>{mail}</span>
            </div>
            <button type='button' className='btn btn-logout'>
                <Link to='/welcome'>Log Out</Link>
            </button>
        </header>
    );
}
