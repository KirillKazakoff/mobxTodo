import React from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';

export default function TodosHeader() {
    const { name, mail } = userStore.header;
    const navigate = useNavigate();
    const onClick = () => navigate('/login');

    return (
        <header className='header header-app framed'>
            <div className='title-container'>
                <span className='title title-name title--lg text--block'>{name}</span>
                <span className='title title-email title--sm'>{mail}</span>
            </div>
            <button
                type='button' className='btn btn-logout'
                onClick={onClick}
            >
                Log Out
            </button>
        </header>
    );
}
