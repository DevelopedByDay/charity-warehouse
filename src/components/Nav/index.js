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
            <nav className="">
                <h1 className="center">Explore Types of Charities</h1>
                <ul className="">
                    {categories.map((category) => (
                        <li className = {`nav ${currentCategory.name === category.name}`}
                            key = {category.name}>
                            <span className = {``} onClick = {() => {setCurrentCategory(category)}}>
                            <a data-testid="link" href = '/' ></a>
                            {<img src={category.icon} className = "miniLogo" alt = 'logo'/>}
                            {capitalizeFirstLetter(category.name)}
                            </span>
                            
                        </li>
                    ))}
                </ul>
            </nav>
        
    );
}

export default Nav;