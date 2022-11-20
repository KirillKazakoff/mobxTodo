import React, { useState } from 'react';
import filterStore from '../../../../stores/user/todosStore';
import FiltrationOptions from './FiltrationOptions';

export default function Filtration() {
    const [isActive, setActive] = useState(false);
    const onClick = () => setActive(!isActive);

    return (
        <div className='filtration' onBlur={onClick}>
            <span className='filtration__desc'>Filter by:</span>
            <button className='filtration__select' type='button'>
                <li
                    onClick={onClick}
                    className='filtration__option filtration__option--selected'
                >
                    {filterStore.status}
                </li>
                <FiltrationOptions setActiveHandler={onClick} isActive={isActive} />
            </button>
        </div>
    );
}
