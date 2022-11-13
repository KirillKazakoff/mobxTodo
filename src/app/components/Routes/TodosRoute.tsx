import React from 'react';
import { Link } from 'react-router-dom';

export default function TodosRoute() {
    return (
        <section className='page page-app'>
            <header className='header header-app framed'>
                <div className='title-container'>
                    <span className='title title-name title--lg text--block'>
                        Monica Belucci
                    </span>
                    <span className='title title-email title--sm'>@monicabelucci</span>
                </div>
                <button type='button' className='btn btn-logout'>
                    <Link to='/welcome'>Log Out</Link>
                </button>
            </header>
            <main className='content content-app framed'>
                <span className='title title-time'>Good Afternoon !</span>

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
                                    Cook Rice and Chicken at 10 am Cook Rice and Chicken
                                    at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                            <li className='todo'>
                                <input className='todo__checkbox' type='checkbox' />
                                <span className='todo__desc'>
                                    Cook Rice and Chicken at 10 am
                                </span>
                                <button type='button' className='btn btn-remove'>
                                    <img
                                        src='./svg/remove.svg'
                                        alt='remove-icon'
                                        className='svg svg-remove'
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </form>
            </main>
        </section>
    );
}
