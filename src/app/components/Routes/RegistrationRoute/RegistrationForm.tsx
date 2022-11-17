import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import FormResponse from '../../Common/Form/components/FormResponse';
import InputText from '../../Common/Form/components/InputText';
import useRegistrationSettings from './useRegistrationSettings';

const RegistrationForm = observer(() => {
    const { initialValues, validate, onSubmit } = useRegistrationSettings();

    return (
        <Formik
            initialValues={initialValues} validate={validate}
            onSubmit={onSubmit}
        >
            <Form className='form form-auth framed' id='registration-form'>
                <ul className='form__controls'>
                    <InputText
                        autoFocus name='name'
                        placeholder='Enter your name'
                    />
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
                <FormResponse form='register' />
            </Form>
        </Formik>
    );
});

export default RegistrationForm;
