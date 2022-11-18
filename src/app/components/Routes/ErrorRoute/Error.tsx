import React from 'react';

type Props = { title: string; desc: string; children: React.ReactNode };

export default function Error({ title, desc, children }: Props) {
    return (
        <div className='error'>
            <h2 className='error__title'>{title}</h2>
            <div className='error__desc'>{desc}</div>
            <div className='error__pic-container'>
                <div className='error__pic error__pic-cache'>
                    <div className='error__loader'>
                        <div className='lds-spinner'>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
