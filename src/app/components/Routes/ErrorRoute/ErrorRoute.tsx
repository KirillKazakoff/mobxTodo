import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBtn from './ErrorBtn';
import Error from './Error';

export default function ErrorRoute() {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <Error
            title='404 Error'
            desc='Something went wrong bruh, you should check url bar'
        >
            <ErrorBtn onClick={onClick} desc='Get back' />
        </Error>
    );
}
