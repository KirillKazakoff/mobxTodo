import { FormikHelpers } from 'formik';

// UserT
export type TodoT = {
    id: string;
    desc: string;
    isChecked: boolean;
};
export type PersonalDataT = {
    name: string;
    mail: string;
    password: string;
};

export type UserT = {
    id: string;
    personalData: PersonalDataT;
    todos: TodoT[];
};

// LoginT
export type LoginT = {
    mail: string;
    password: string;
};

// RequestType
export type RequestObjT = {
    url?: string;
    settings?: RequestInit;
};

// Filter
export type FilterTypeT = 'all' | 'done' | 'undone';

// OnSubmit
export type OnSubmitT<T> = (values: T, actions: FormikHelpers<T>) => Promise<void>;
