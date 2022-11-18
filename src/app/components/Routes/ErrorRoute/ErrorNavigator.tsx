import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pageStatusStore from '../../../stores/user/pageStatusStore';

const ErrorNavigator = observer(() => {
    const navigate = useNavigate();
    const { status } = pageStatusStore;

    useEffect(() => {
        if (status !== 'idle') navigate('/network');
    }, [status, navigate]);

    return <div className='error__pic-cache' />;
});

export default ErrorNavigator;
