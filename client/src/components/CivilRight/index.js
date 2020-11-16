import React from 'react';
import civilRightsLogo from '../../assets/Civil-Liberties.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';

const CivilRightsList = () => {
  const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const [addCharity] = useMutation(ADD_CHARITY);

    const civilRights = charities.filter((civRight) => civRight.category === 'civil rights'); 
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
                {civilRights.map((civilRight) => (
                    <li className="my-2" key = {civilRight.name}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={civilRightsLogo} alt = 'civil rights logo' className="charLogo"/>
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