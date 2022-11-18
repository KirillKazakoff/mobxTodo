import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ErrorNavigator from './ErrorRoute/ErrorNavigator';

const MainRoute = observer(() => {
    const { pathname } = useLocation();
    let className = 'page__wrapper';
    className = pathname !== '/todos' ? pathname : `${className} ${className}-todos`;

    return (
        <div className={className}>
            <ErrorNavigator />
            <Outlet />
        </div>
    );
});

export default MainRoute;
