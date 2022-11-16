import { FormikHelpers } from 'formik';

export type OnSubmitT<T> = (values: T, actions: FormikHelpers<T>) => Promise<void>;
