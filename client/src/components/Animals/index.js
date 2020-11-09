

import React from 'react';
import AnimalsLogo from '../../assets/Animals.png'
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';

const AnimalList = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || []; 
    
    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);
      
   const animals = charities.filter((animal) => animal.category === 'animals'); 
    console.log(animals);
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
            
            <ul className="category">
                {animals.map((animal) => (
                    <li className="my-2" key = {animal._id}>
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={AnimalsLogo} className="charLogo flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href = {animal.url} key = {animal._id} target = '_blank' rel = 'noreferer'>{animal.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{animal.location}</h4>
                            
                                <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(animal._id)}} ><FaHeart /></button>
                                </div>
                            </div>
                            <p>{animal.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AnimalList;