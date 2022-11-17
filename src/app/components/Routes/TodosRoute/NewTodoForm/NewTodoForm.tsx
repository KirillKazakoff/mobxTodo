import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import todosStore from '../../../../stores/user/todosStore';
import InputText from '../../../Common/Form/components/InputText';
import FormButtons from './FormButtons';
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
                    <FormButtons onRemove={onRemove} />
                </div>
            </Form>
        </Formik>
    );
});

export default NewTodoForm;
