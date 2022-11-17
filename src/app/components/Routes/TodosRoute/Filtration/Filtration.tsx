import React, { useState } from 'react';
import filterStore from '../../../../stores/user/todosStore';
import FiltrationOptions from './FiltrationOptions';

export default function Filtration() {
    const [isActive, setActive] = useState(false);
    const onClick = () => setActive(!isActive);

    return (
        <div className='filtration'>
            <span className='filtration__desc'>Filter by:</span>
            <div className='filtration__select'>
                <li
                    onClick={onClick}
                    className='filtration__option filtration__option--selected'
                >
                    {filterStore.status}
                </li>
                <FiltrationOptions setActiveHandler={onClick} isActive={isActive} />
            </div>
        </div>
    );
}
