import { FormikErrors, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import userStore from '../../../stores/user/userStore';
import getErrorsDescription from '../../Common/Form/validation/getErrorsDescription';
import { checkPatternMail } from '../../Common/Form/validation/utils';

export default function useLogingSettings() {
    const initialValues = userStore.isLogined
        ? userStore.loginInfo
        : userStore.preloadedState;

    type FormValuesT = typeof initialValues;
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
        try {
            await userStore.login(values);
            navigate('/todos');
        } catch (e) {
            actions.setStatus(e.message);
        }
    };

    return {
        onSubmit,
        validate,
        initialValues,
    };
}
