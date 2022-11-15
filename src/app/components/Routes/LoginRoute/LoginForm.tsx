// import React from 'react';
import { Form, Formik } from 'formik';
import React from 'react';
import InputText from '../../Common/Form/components/InputText';
import useLogingSettings from './useLoginSettings';
import FormResponse from '../../Common/Form/components/FormResponse';

export default function LoginForm() {
    const { initialValues, validate, onSubmit } = useLogingSettings();

    return (
        <Formik
            initialValues={initialValues} validate={validate}
            onSubmit={onSubmit}
        >
            <Form className='form form-auth framed' id='login-form'>
                <ul className='form__controls form__controls-login'>
                    <InputText name='mail' placeholder='Enter your mail' />
                    <InputText
                        name='password'
                        placeholder='Enter your password'
                        type={'password'}
                    />
                </ul>
                <FormResponse form='login' />
            </Form>
        </Formik>
    );
}
