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
            <nav className="navSection">
                <h1 className="navTitle">Explore Types of Charities</h1>
                <ul className="navCharIcons flex-grid">
                    {categories.map((category) => (
                        <li className = {`nav col ${currentCategory.name === category.name}`}
                            key = {category.name}>
                        
                            <span className = {`navLinks`} onClick = {() => {setCurrentCategory(category)}}>
                                {<img src={category.icon} alt = 'category icon' className = "miniLogo"/>}

                                {capitalizeFirstLetter(category.name)}
                            </span>
                            
                        </li>
                    ))}
                </ul>
            </nav>
        
    );
}

export default Nav;