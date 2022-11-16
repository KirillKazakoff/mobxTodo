import React from 'react';
import filterStore from '../../../../stores/user/filterStore';
import { FilterTypeT } from '../../../../types/types';

type Props = { setActiveHandler: () => void; isActive: boolean };

export default function FiltrationOptions({ setActiveHandler, isActive }: Props) {
    const filters: FilterTypeT[] = ['all', 'done', 'undone'];
    const onClick = (filter: FilterTypeT) => () => {
        setActiveHandler();
        filterStore.setFilter(filter);
    };

    const filtersHtml = filters.map((filter) => {
        return (
            <li
                onClick={onClick(filter)} className='filtration__option'
                key={filter}
            >
                {filter}
            </li>
        );
    });

    if (!isActive) return null;

    return <ul className='filtration__options'>{filtersHtml}</ul>;
}
