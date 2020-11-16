

import React from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import{QUERY_USER, QUERY_ME, QUERY_CHARITIES} from '../../utils/queries';
import Auth from '../../utils/auth';
import {useParams} from 'react-router-dom';
import {ADD_CHARITY} from '../../utils/mutations';


    
    

const SavedCharities = () => {
    
    const me = Auth.getProfile().data.username;
    console.log(me);
    
    const {username: userParam} = useParams();
    
    const {loading, error, data} = useQuery(QUERY_USER, {
        variables: {username: me}
    });
    
    const savedCharities = data || {};
    console.log(savedCharities);
    const charities = savedCharities.user.savedCharities;
    console.log(charities);

    if (charities.length > 0) {
        return (
            <div>
                You have no saved charities!
            </div>
        )
    }
    
    

    

    return (
        <div>
             <ul className="category">  
                {charities.map((charity) => (
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