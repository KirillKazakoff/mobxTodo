import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import SpinLoader from '../../SpinLoader';
import { messages } from '../validation/messages';

type Props = { form: string };

export default function FormResponse({ form }: Props) {
    const [msgActive, setMsgActive] = useState(false);
    const { isSubmitting, status } = useFormikContext();

    useEffect(() => {
        if (isSubmitting) setMsgActive(true);
    }, [isSubmitting]);

    if (isSubmitting) return <SpinLoader />;
    if (!msgActive) return null;

    const onClick = () => setMsgActive(false);
    // return <span className='form__response'>{messages[form][status]}</span>;
    return (
        <div className='form__response'>
            <span className='form__response-desc'>{messages[form][status]}</span>
            <button
                type='button'
                className='btn btn-remove-task yellow-filter'
                onClick={onClick}
            >
                <img
                    className='svg svg-remove-task svg--scale'
                    src='./svg/remove.svg'
                    alt='remove-icon'
                />
            </button>
        </div>
    );
}
