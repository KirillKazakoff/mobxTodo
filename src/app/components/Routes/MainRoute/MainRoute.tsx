import React from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ErrorNavigator from '../ErrorRoute/ErrorNavigator';
import useBodyColor from './useBodyColor';

const MainRoute = observer(() => {
    useBodyColor();

    return (
        <div className='page__wrapper'>
            <ErrorNavigator />
            <Outlet />
        </div>
    );
});

export default MainRoute;
