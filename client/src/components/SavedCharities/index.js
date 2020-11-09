

import React from 'react';
import {Link} from 'react-router-dom';

const SavedCharities = ({username, charities}) => {
    if (!charities || !charities.length) {
        return <p>{username}, has no saved charities.</p>;
    }

    return (
        <div>
            <ul className="category">
                {charities.map((charity) => (
                    <li className="my-2" key = {charity.name}>
                        <span className="test flex-row">
                            <div className = "flex-row">
                               {/* <img src={AnimalsLogo} className="charLogo flex-row"/> */}
                            <h2 className="categoryName flex-row">
                            <a href= {charity.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank" rel = 'noreferrer'>{charity.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{charity.location}</h4>
                            
                                <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    {/* <button className = 'fave-btn' type = 'submit'><FaHeart /></button> */}
                                </div>
                            </div>
                            <p>{charity.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedCharities;