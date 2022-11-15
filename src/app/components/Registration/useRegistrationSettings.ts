import { FormikErrors } from 'formik';
import { useNavigate } from 'react-router-dom';
import userStore from '../../stores/user/userStore';
import getErrorsDescription from '../Common/Form/validation/getErrorsDescription';
import { checkPatternMail } from '../Common/Form/validation/utils';

const initialValues = {
    name: 'username',
    mail: 'username@mail.com',
    password: '123',
    checkPassword: '123',
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
    } else if (checkPatternMail(mail)) {
        errors.mail = 'patternMismatch';
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

export default function useRegistrationSettings() {
    const navigate = useNavigate();
    const onSubmit = (values: FormValuesT) => {
        userStore.register(values);
        navigate('/todos');
    };
    return { initialValues, validate, onSubmit };
}
