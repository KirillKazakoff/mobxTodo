import React from 'react';

export default function NewTodoForm() {
    return (
        <form className='form form-new-task' hidden>
            <div className='form-new-task__container'>
                <label className='form-new-task__desc'>New task</label>
                <div className='form__control form__control-new-task'>
                    <input
                        className='input input-text'
                        placeholder='Enter your new task'
                    />
                </div>
                <div className='form__buttons'>
                    <button type='button' className='btn btn-remove-task'>
                        <img
                            className='svg svg-remove-task svg--scale'
                            src='./svg/remove.svg'
                            alt='remove-icon'
                        />
                    </button>
                    <button type='button' className='btn btn-agree-task'>
                        <img
                            className='svg svg-agree-task svg--scale'
                            src='./svg/tick.svg'
                            alt='agree-icon'
                        />
                    </button>
                </div>
            </div>
        </form>
    );
}
