import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import userStore from '../../../stores/user/userStore';

const TodosHeader = observer(() => {
    const { name, mail } = userStore.user.personalData;
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
});

export default TodosHeader;
