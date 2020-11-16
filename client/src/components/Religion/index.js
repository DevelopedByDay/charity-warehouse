

import React from 'react';
import religionsLogo from '../../assets/religions.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';

const ReligionList = () => {

    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const [addCharity] = useMutation(ADD_CHARITY);

    const religions = charities.filter((religion) => religion.category === 'religion');
   
    const handleClick = async (id) => {
        try {
            await addCharity({
                variables: {id: id}
            });
        } catch (e) {
            console.error(e);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <section className="my-5">
            <ul class="category">
                {religions.map((religion) => (
                    <li className="my-2" key = {religion._id}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={religionsLogo} alt = 'religion logo' className="charLogo"/>
                            <h2 className="categoryName flex-row">
                            <a href= {religions.url} key = {religion._id} target="_blank" rel = 'noreferrer'>{religion.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{religion.location}</h4>
                                <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(religion._id)}}> Favorite<FaHeart /></button>
                                </div>
                            </div>
                            <p className = "mission">{religion.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ReligionList;