import { FormikErrors } from 'formik';
import user from '../../stores/user/user';
import getErrorsDescription from '../Common/Form/validation/getErrorsDescription';

const initialValues = {
    name: '',
    mail: '',
    password: '',
    checkPassword: '',
};
type FormValuesT = typeof initialValues;

const validate = (values: FormValuesT) => {
    const {
        name, mail, password, checkPassword,
    } = values;
    const errors: FormikErrors<FormValuesT> = {};

    if (!name) {
        errors.name = 'valueMissing';
    }
    if (!mail) {
        errors.mail = 'valueMissing';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
        errors.mail = 'typeMismatch';
    }
    if (!password) {
        errors.password = 'valueMissing';
    }
    if (!checkPassword) {
        errors.checkPassword = 'valueMissing';
    } else if (password !== checkPassword) {
        errors.checkPassword = 'valueMismatch';
    }

    return getErrorsDescription(errors);
};

const onSubmit = (values: FormValuesT) => {
    user.register(values);
};

export default function getRegistrationSettings() {
    return { initialValues, validate, onSubmit };
}
