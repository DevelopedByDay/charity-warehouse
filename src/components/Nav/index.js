//this is a nav component
import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    

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
                        <li className = {`${currentCategory.name === category.name}`}
                            key = {category.name}>
                            <span onClick = {() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;