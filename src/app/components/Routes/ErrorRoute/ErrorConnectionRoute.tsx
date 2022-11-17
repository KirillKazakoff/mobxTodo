import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ErrorBtn from './ErrorBtn';
import Error from './Error';
import pageStatusStore from '../../../stores/user/pageStatusStore';

const ErrorConnectionRoute = observer(() => {
    const navigate = useNavigate();
    const onClick = () => {
        pageStatusStore.refreshStatus();
        navigate(-1);
    };

    return (
        <Error
            title='Internet Disconnected!'
            desc='Something went wrong, please try to reconnect...'
        >
            <ErrorBtn onClick={onClick} desc='Get back' />
        </Error>
    );
});

export default ErrorConnectionRoute;
