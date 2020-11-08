

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

    const religions = charities.filter((religion) => religion.category === 'religion');
    console.log(religions);
    const handleClick = async (id) => {
        try {
            const updatedUser = await addCharity({
                variables: {id: id}
            });
            console.log(updatedUser);
        } catch (e) {
            console.error(e);
        }
    };
    
    
    return (
        <section className="my-5">
            {/* <h1 id="">Animal Related Charities</h1> */}
            <ul class="category">
                {religions.map((religion) => (
                    <li className="my-2" key = {religion._id}>
                        
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={religionsLogo} className="charLogo  flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {religions.url} key = {religion._id} target="_blank" rel = 'noreferrer'>{religion.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{religion.location}</h4>
                            <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(religion._id)}}><FaHeart /></button>
                                </div>
                            </div>
                            
                            <p>{religion.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ReligionList;