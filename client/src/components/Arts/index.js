import React from 'react';
import ArtsLogo from '../../assets/Arts.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';

const ArtsList = () => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const [addCharity] = useMutation(ADD_CHARITY);

    const arts = charities.filter((art) => art.category === 'arts');  
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
                {arts.map((art) => (
                    <li className="my-2" key = {art._id}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                                <img src={ArtsLogo} alt = 'arts logo' className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {art.url} key = {art._id} target="_blank" rel = 'noreferrer'>{art.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{art.location}</h4>
                            <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(art._id)}}><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            <p className = "mission">{art.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ArtsList;