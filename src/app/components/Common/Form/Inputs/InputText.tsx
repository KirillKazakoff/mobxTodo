import { Field, FieldHookConfig } from 'formik';
import React from 'react';
import Feedback from '../Feedback/Feedback';

export default function InputText(props: FieldHookConfig<string>) {
    return (
        <li className='form__control'>
            <Field
                name={props.name}
                className='input-text'
                type={props.type || 'text'}
                placeholder={props.placeholder}
            />

            <Feedback name={props.name} />
        </li>
    );
}
