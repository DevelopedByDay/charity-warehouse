

import React from 'react';

function Nav() {

    const categories = [
        { name: 'animals'},
        { name: 'arts'},
        { name: 'civil-rights'},
        { name: 'community'},
        { name: 'environmental'},
        { name: 'religion'}
    ];

    return (
        <header>
            <h2>
                <a href = '/'>
                    <span role = 'img'>Charity Warehouse</span>
                </a>
            </h2>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key = {category.name}>
                            <span>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;