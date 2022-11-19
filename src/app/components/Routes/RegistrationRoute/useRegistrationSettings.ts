import { FormikErrors } from 'formik';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';
import { OnSubmitT } from '../../../types/types';

import getErrorsDescription from '../../Common/Form/validation/getErrorsDescription';
import { checkPatternMail } from '../../Common/Form/validation/utils';

const initialValues = {
    name: 'username',
    mail: 'username@mail.com',
    password: '123',
    checkPassword: '123',
};
// const initialValues = {
//     name: '',
//     mail: '',
//     password: '',
//     checkPassword: '',
// };
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
    const onSubmit: OnSubmitT<FormValuesT> = async (values, actions) => {
        try {
            await userStore.register(values);
            navigate('/todos');
        } catch (e) {
            actions.setStatus(e.message);
        }
    };
    return { initialValues, validate, onSubmit };
}
