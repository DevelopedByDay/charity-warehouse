

import React from 'react';
import religionsLogo from '../../assets/religions.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';


const ReligionList = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);

    const handleClick = async () => {
        try {
            await addCharity({
                variables: {id: charities._id}
            });
        } catch (e) {
            console.error(e);
        }
    };
    
    
    return (
        <section className="my-5">
            {/* <h1 id="">Animal Related Charities</h1> */}
            <ul class="category">
                {charities.map((religions) => (
                    <li className="my-2" key = {religions.name}>
                        {/* <div>{animal.logo}</div>
                        <div>{AnimalsLogo}</div> */}
                        
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={religionsLogo} className="charLogo  flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {religions.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank" rel = 'noreferrer'>{religions.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{religions.location}</h4>
                            <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {handleClick}><FaHeart /></button>
                                </div>
                            </div>
                            
                            <p>{religions.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ReligionList;