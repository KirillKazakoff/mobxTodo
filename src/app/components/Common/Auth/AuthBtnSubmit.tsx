import React from 'react';

type Props = { form: string; desc: string };

export default function AuthBtnSubmit({ form, desc }: Props) {
    return (
        <button
            type='submit' className='btn btn-next-section'
            form={form}
        >
            {desc}
        </button>
    );
}
