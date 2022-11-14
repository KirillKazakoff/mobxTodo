import { Formik, Form } from 'formik';
import React from 'react';
import InputText from '../Common/Form/Inputs/InputText';
import getRegistrationSettings from './registrationModel';

export default function RegistrationForm() {
    const { initialValues, validate, onSubmit } = getRegistrationSettings();

    return (
        <Formik
            initialValues={initialValues} validate={validate}
            onSubmit={onSubmit}
        >
            <Form className='form form-auth framed' id='registration-form'>
                <ul className='form__controls'>
                    <InputText name='name' placeholder='Enter your name' />
                    <InputText name='mail' placeholder='Enter your mail' />
                    <InputText
                        name='password'
                        placeholder='Enter your password'
                        type={'password'}
                    />
                    <InputText
                        name='checkPassword'
                        placeholder='Confirm your password'
                        type={'password'}
                    />
                </ul>
                <button className='btn btn-next-section' type='submit'>
                    Submit
                </button>
            </Form>
        </Formik>
    );
}
