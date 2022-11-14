import { FormikErrors } from 'formik';
import user from '../../stores/user';

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
        errors.name = 'Required';
    }
    if (!mail) {
        errors.mail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
        errors.mail = 'Invalid email address';
    }
    if (!password) {
        errors.password = 'Required';
    }
    if (!checkPassword) {
        errors.checkPassword = 'Required';
    } else if (password !== checkPassword) {
        errors.checkPassword = "Password doesn't match";
    }

    return errors;
};

const onSubmit = (values: FormValuesT) => {
    user.register(values);
    console.log(user.user.userInfo.personalData.mail);
};

export default function getRegistrationSettings() {
    return { initialValues, validate, onSubmit };
}
