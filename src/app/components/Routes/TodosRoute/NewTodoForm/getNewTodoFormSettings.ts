import { FormikErrors } from 'formik';
import { nanoid } from 'nanoid';
import getErrorsDescription from '../../../Common/Form/validation/getErrorsDescription';
import { OnSubmitT } from '../../../../types/typesForm';
import todosStore from '../../../../stores/user/todosStore';
import { TodoT } from '../../../../types/types';

const initialValues = {
    newTodo: '',
};
type FormValuesT = typeof initialValues;

const validate = (values: FormValuesT) => {
    const { newTodo } = values;
    const errors: FormikErrors<FormValuesT> = {};

    if (!newTodo) {
        errors.newTodo = 'valueMissing';
    }
    return getErrorsDescription(errors);
};

const onSubmit: OnSubmitT<FormValuesT> = async ({ newTodo }, actions) => {
    try {
        const todo: TodoT = {
            id: nanoid(),
            desc: newTodo,
            isChecked: false,
        };
        await todosStore.addTodo(todo);
    } catch (e) {
        actions.setStatus(e.message);
    }
};

export default function getNewTodoFormSettings() {
    return { initialValues, validate, onSubmit };
}
