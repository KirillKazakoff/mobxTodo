import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useBodyColor = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname !== '/todos') {
            document.body.classList.remove('body--todos');
            return;
        }

        document.body.classList.add('body--todos');
    }, [pathname]);
};

export default useBodyColor;
