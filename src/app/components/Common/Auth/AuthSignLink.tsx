import React from 'react';
import { Link } from 'react-router-dom';

type Props = { desc: string; to: string };

export default function AuthSignLink({ desc, to }: Props) {
    return (
        <div className='sign-link__container'>
            <span className='sign-link__desc'>{desc}</span>
            <Link to={to} className='sign-link'>
                Sign In
            </Link>
        </div>
    );
}
