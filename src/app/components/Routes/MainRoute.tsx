import React from 'react';

export default function MainRoute() {
    return (
        <section className='main main-auth'>
            <header className='header header-app framed'>
                <div className='title-container'>
                    <span className='title title-name text--block'>Monica Belucci</span>
                    <span className='title title-email title--sm'>@monicabelucci</span>
                </div>
                <button type='button' className='btn btn-logout'>
                    Log Out
                </button>
            </header>
            <main className='content framed'>
                <div className='title-container'>
                    <span className='title'>Good Afternoon !</span>
                </div>
                <form className='form form-tasks'>
                    <div className='form-tasks__container'>
                        <header className='form-tasks__header'>
                            <span className='form-tasks__title'>Add new task</span>
                        </header>
                    </div>
                </form>
            </main>
        </section>
    );
}
