import React from 'react';

type PropsT = {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void | null;
};

export default function BtnNextSection({ children, disabled, onClick }: PropsT) {
    return (
        <button
            disabled={disabled}
            type='button'
            onClick={onClick}
            className='btn btn-next-section'
        >
            {children}
        </button>
    );
}

BtnNextSection.defaultProps = {
    disabled: false,
    onClick: null,
};
