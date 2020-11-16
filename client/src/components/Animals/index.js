

import React from 'react';
import AnimalsLogo from '../../assets/Animals.png'
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';

const AnimalList = () => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || []; 

    const [addCharity] = useMutation(ADD_CHARITY);
      
   const animals = charities.filter((animal) => animal.category === 'animals'); 
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
            <ul className="category">
                {animals.map((animal) => (
                    <li className="my-2" key = {animal._id}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={AnimalsLogo} alt = 'animals logo' className="charLogo"/>
                            <h2 className="categoryName">
                            <a href = {animal.url} key = {animal._id} target = '_blank' rel = 'noreferrer'>{animal.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{animal.location}</h4>
                                <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(animal._id)}} ><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            <p className = "mission">{animal.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AnimalList;