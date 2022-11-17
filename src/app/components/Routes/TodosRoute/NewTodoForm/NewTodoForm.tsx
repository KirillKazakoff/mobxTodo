import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import todosStore from '../../../../stores/user/todosStore';
import FormResponse from '../../../Common/Form/components/FormResponse';
import InputText from '../../../Common/Form/components/InputText';
import getNewTodoFormSettings from './getNewTodoFormSettings';

const NewTodoForm = observer(() => {
    if (!todosStore.isAddingTodo) return null;
    const { validate, initialValues, onSubmit } = getNewTodoFormSettings();
    const onRemove = () => {
        todosStore.toggleNewTodoForm();
    };

    return (
        <Formik
            initialValues={initialValues} validate={validate}
            onSubmit={onSubmit}
        >
            <Form className='form form-new-todo'>
                <div className='form-new-todo__container'>
                    <label className='form-new-todo__desc'>New Todo</label>
                    <div className='form__control-new-todo-wrapper'>
                        <InputText
                            autoFocus
                            wrapperCls='form__control-new-todo'
                            name='newTodo'
                            placeholder='Enter your new todo'
                        />
                    </div>
                    <div className='form__buttons'>
                        <button
                            type='button'
                            className='btn btn-remove-todo'
                            onClick={onRemove}
                        >
                            <img
                                className='svg svg-remove-todo svg--scale'
                                src='./svg/remove.svg'
                                alt='remove-icon'
                            />
                        </button>
                        <FormResponse form='newTodoForm' cls='form__response-new-todo' />
                        <button type='submit' className='btn btn-agree-todo'>
                            <img
                                className='svg svg-agree-todo svg--scale'
                                src='./svg/tick.svg'
                                alt='agree-icon'
                            />
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
});

export default NewTodoForm;
