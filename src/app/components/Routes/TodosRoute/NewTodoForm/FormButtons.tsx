import { useFormikContext } from 'formik';
import React from 'react';
import FormResponse from '../../../Common/Form/components/FormResponse';

type Props = { onRemove: () => any };
export default function FormButtons({ onRemove }: Props) {
    const { isSubmitting } = useFormikContext();
    if (isSubmitting) {
        return (
            <div className='form__buttons'>
                <FormResponse form='newTodoForm' cls='form__response-new-todo' />
            </div>
        );
    }

    return (
        <div className='form__buttons'>
            <button
                type='button' className='btn btn-remove-todo'
                onClick={onRemove}
            >
                <img
                    className='svg svg-remove-todo svg--scale'
                    src='./svg/remove.svg'
                    alt='remove-icon'
                />
            </button>

            <button type='submit' className='btn btn-agree-todo'>
                <img
                    className='svg svg-agree-todo svg--scale'
                    src='./svg/tick.svg'
                    alt='agree-icon'
                />
            </button>
        </div>
    );
}
