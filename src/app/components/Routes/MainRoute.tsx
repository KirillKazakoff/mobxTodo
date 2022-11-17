import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import pageStatusStore from '../../stores/user/pageStatusStore';

const img = new Image();
img.src = './img/catLoaderOrig.jpeg';
img.onload = (e) => console.log(e);

const MainRoute = observer(() => {
    const navigate = useNavigate();
    const { isConnected } = pageStatusStore;

    useEffect(() => {
        if (!isConnected) navigate('/disconnect');
    }, [isConnected, navigate]);

    const { pathname } = useLocation();
    let className = 'page__wrapper';
    className = pathname !== '/todos' ? pathname : `${className} ${className}-todos`;

    return (
        <div className={className}>
            <Outlet />
        </div>
    );
});

export default MainRoute;
