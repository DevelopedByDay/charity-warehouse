

import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import{QUERY_USER} from '../../utils/queries';
import Auth from '../../utils/auth';

const SavedCharities = () => {
    
    const me = Auth.getProfile().data.username;
    
    const {loading, data} = useQuery(QUERY_USER, {
        variables: {username: me}
    });
 
    const savedCharities = data?.user.savedCharities || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
             <ul className="category">      
                {(savedCharities).map((charity) => (
                    <li className="my-2" key = {charity.name}>
                        <span className="test flex-row">
                            <div className = "flex-row">
                            <h2 className="categoryName flex-row">
                            <a href= {charity.url} key = {charity._id} target="_blank" rel = 'noreferrer'>{charity.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{charity.location}</h4>
                                <div className = 'flex-row'>
                                     <button className = 'donate-btn' type = 'submit'>Donate</button>   
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