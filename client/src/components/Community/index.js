

import React from 'react';
import CommunityLogo from '../../assets/Community.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';

const CommDevList = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);

    const commDevs = charities.filter((comDev) => comDev.category === 'commdev');
    console.log(commDevs);
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
 
            <ul class="category">
                {commDevs.map((community) => (
                    <li className="my-2" key = {community._id}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={CommunityLogo} className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {community.url} key = {community._id} target="_blank" rel = 'noreferrer'>{community.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{community.location}</h4>
                            <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(community._id)}}><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            
                            <p className = "mission">{community.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>

        
    )
}

export default CommDevList;