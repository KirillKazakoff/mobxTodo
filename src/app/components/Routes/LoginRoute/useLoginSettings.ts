import { FormikErrors, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';
import getErrorsDescription from '../../Common/Form/validation/getErrorsDescription';
import { checkPatternMail } from '../../Common/Form/validation/utils';
import { timeoutMock } from '../../../api/request';

const initialValues = {
    mail: 'mail@mail.com',
    password: '123',
};
type FormValuesT = typeof initialValues;

export default function useLogingSettings() {
    const navigate = useNavigate();

    const validate = (values: FormValuesT) => {
        const { mail, password } = values;
        const errors: FormikErrors<FormValuesT> = {};

        if (!mail) {
            errors.mail = 'valueMissing';
        } else if (checkPatternMail(mail)) {
            errors.mail = 'patternMismatch';
        }
        if (!password) {
            errors.password = 'valueMissing';
        }

        return getErrorsDescription(errors);
    };

    const onSubmit = async (values: FormValuesT, actions: FormikHelpers<FormValuesT>) => {
        await timeoutMock(1000);
        const res = userStore.login(values);
        if (!res) {
            actions.setStatus('loginFailed');
            validate(values);
            return;
        }
        navigate('/todos');
    };

    return {
        onSubmit,
        validate,
        initialValues,
    };
}
