import React from 'react';
import civilRightsLogo from '../../assets/Civil-Liberties.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';

const CivilRightsList = (charity) => {
  const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);

    const civilRights = charities.filter((civRight) => civRight.category === 'civil rights');  
    console.log(civilRights);
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
            {/* <h1>Civil Rights</h1> */}
            <ul class="category">
                {civilRights.map((civilRight) => (
                    <li className="my-2" key = {civilRight.name}>

                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={civilRightsLogo} className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {civilRight.url} key = {civilRight._id} target="_blank" rel = 'noreferrer'>{civilRight.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{civilRight.location}</h4>
                            <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(civilRight._id)}}><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            
                            <p className = "mission">{civilRight.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CivilRightsList;