import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import logo from '../../assets/cover/giving-logo.png';
// import logo from '../../assets/hero.jpg';

function Header() {
    return (
    
    <header className="flex-row px-1 ">
            <h2 className="flex-row px-1 center">
                <a className = "" data-testid="link" href = '/'><div className = "logo flex-row"><img src={logo}/></div></a>
                <p className="motto flex-row">Intelligent philanthropy.</p>
            </h2>
    </header>
)
}

export default Header;