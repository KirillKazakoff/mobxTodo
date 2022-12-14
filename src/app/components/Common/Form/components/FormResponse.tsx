import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import SpinLoader from '../../SpinLoader';
import { messages } from '../validation/messages';

type Props = { form: string };

function FormResponseContainer({ form }: Props) {
    const [msgActive, setMsgActive] = useState(false);
    const { isSubmitting, status } = useFormikContext();

    useEffect(() => {
        if (isSubmitting) setMsgActive(true);
    }, [isSubmitting]);

    if (isSubmitting) return <SpinLoader cls='sk-chase-form' />;
    if (!msgActive || !status) return null;

    const onClick = () => setMsgActive(false);

    return (
        <div className='form__response-container'>
            <span className='form__response-desc'>{messages[form][status]}</span>
            <button
                type='button'
                className='btn btn-remove-todo yellow-filter'
                onClick={onClick}
            >
                <img
                    className='svg svg-remove-todo svg--scale'
                    src='./svg/remove.svg'
                    alt='remove-icon'
                />
            </button>
        </div>
    );
}

export default function FormResponse({ form, cls }: Props & { cls?: string }) {
    return (
        <div className={`form__response ${cls}`}>
            <FormResponseContainer form={form} />
        </div>
    );
}

FormResponse.defaultProps = {
    cls: '',
};
