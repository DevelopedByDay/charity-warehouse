//this is a nav component
import React from 'react';

//constructor function
function Nav() {

    const categories = [
        { name: 'animals'},
        { name: 'arts'},
        { name: 'civil-rights'},
        { name: 'community'},
        { name: 'environmental'},
        { name: 'religion'}
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

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
                            <span onClick = {() => categorySelected(category.name)}>
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