import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function MainRoute() {
    const { pathname } = useLocation();
    let className = 'page__wrapper';
    className = pathname !== '/todos' ? pathname : `${className} ${className}-todos`;

    return (
        <div className={className}>
            <Outlet />
        </div>
    );
}
