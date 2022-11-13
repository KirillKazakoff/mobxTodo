import React from 'react';

export default function TodosForm() {
    return (
        <form className='form form-tasks'>
            <span className='form-tasks__title'>Tasks List</span>
            <div className='form-tasks__container'>
                <header className='form-tasks__header'>
                    <span className='form-tasks__header-desc'>Add new task</span>
                    <div className='filtration'>
                        <span className='filtration__desc'>Filter by:</span>
                        <div className='filtration__select'>
                            <li className='filtration__option filtration__option--selected'>
                                All
                            </li>
                            <ul className='filtration__options'>
                                <li className='filtration__option'>All</li>
                                <li className='filtration__option'>Done</li>
                                <li className='filtration__option'>Undone</li>
                            </ul>
                        </div>
                    </div>
                    <button type='button' className='btn btn-add'>
                        <img
                            src='./svg/plus.svg'
                            alt='add-icon'
                            className='svg svg-add'
                        />
                    </button>
                </header>
                <ul className='todos'>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>
                            Cook Rice and Chicken at 10 am Cook Rice and Chicken at 10 am
                        </span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                    <li className='todo'>
                        <input className='todo__checkbox' type='checkbox' />
                        <span className='todo__desc'>Cook Rice and Chicken at 10 am</span>
                        <button type='button' className='btn btn-remove'>
                            <img
                                src='./svg/remove.svg'
                                alt='remove-icon'
                                className='svg svg-remove svg--scale'
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </form>
    );
}
