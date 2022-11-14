export type RegistrationFormValuesT = {
    name: string;
};

export type OnSubmitT<T> = (values: T) => void;
