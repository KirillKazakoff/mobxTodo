import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ErrorBtn from './ErrorBtn';
import Error from './Error';
import pageStatusStore from '../../../stores/user/pageStatusStore';
import { ErrorT } from '../../../types/types';

const errDictionary = {
    'Failed to fetch': {
        title: 'Internet Disconnected!',
        desc: 'Something went wrong, please try to reconnect...',
    },
    'Not Found': {
        title: 'Error on server, cant find content',
        desc: 'Please, try to refresh your page...',
    },
    'Internal Server Error': {
        title: 'Error on server occurs',
        desc: 'Please, try to refresh your page...',
    },
} as { [key: string]: ErrorT };

const ErrorConnectionRoute = observer(() => {
    const { status } = pageStatusStore;
    const navigate = useNavigate();

    const onClick = () => {
        pageStatusStore.refreshStatus();
        navigate(-1);
    };

    if (status === 'idle') return null;
    const err = errDictionary[status];

    return (
        <Error title={err.title} desc={err.desc}>
            <ErrorBtn onClick={onClick} desc='Get back' />
        </Error>
    );
});

export default ErrorConnectionRoute;
