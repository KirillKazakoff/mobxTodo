import React from 'react';

export default function BtnAddTodo() {
    return (
        <button type='button' className='btn btn-add'>
            <img
                src='./svg/plus.svg' alt='add-icon'
                className='svg svg-add'
            />
        </button>
    );
}
