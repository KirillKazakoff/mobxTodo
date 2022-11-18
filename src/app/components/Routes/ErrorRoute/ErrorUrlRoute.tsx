import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBtn from './ErrorBtn';
import Error from './Error';

export default function ErrorUrlRoute() {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <Error title='404 Error' desc='Something went wrong, you should check url bar'>
            <ErrorBtn onClick={onClick} desc='Get back' />
        </Error>
    );
}
