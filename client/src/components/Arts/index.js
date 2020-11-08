import React from 'react';
import ArtsLogo from '../../assets/Arts.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';

const ArtsList = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);

    const arts = charities.filter((art) => art.category === 'arts');  
    console.log(arts);
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
                {arts.map((art) => (
                    <li className="my-2" key = {art._id}>

                        <span className="test flex-row">
                            <div className = "flex-row">
                                <img src={ArtsLogo} className="charLogo  flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {art.url} key = {art._id} target="_blank" rel = 'noreferrer'>{art.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{art.location}</h4>
                            <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(art._id)}}><FaHeart /></button>
                                </div>
                            </div>
                            <p>{art.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ArtsList;