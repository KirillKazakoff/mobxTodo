import React, { useState } from 'react';
import SpinLoader from '../../../Common/SpinLoader';

type Props = { removeCb: () => any };

export default function BtnRemoveTodo({ removeCb }: Props) {
    const [isLoading, setLoading] = useState(false);
    const onClick = async () => {
        setLoading(true);
        try {
            await removeCb();
        } catch (e) {
            setLoading(false);
        }
    };

    if (isLoading) return <SpinLoader cls='sk-chase-btn' />;
    return (
        <button
            type='button' className='btn btn-remove'
            onClick={onClick}
        >
            <img
                src='./svg/remove.svg'
                alt='remove-icon'
                className='svg svg-remove svg--scale'
            />
        </button>
    );
}
