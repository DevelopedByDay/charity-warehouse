import React from 'react';
import EnvLogo from '../../assets/Environmental.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';


const EnvironmentalList = () => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const [addCharity] = useMutation(ADD_CHARITY);

    const environment = charities.filter((enviro) => enviro.category === 'environmental');
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
                {environment.map((env) => (
                    <li className="my-2" key = {env._id}>
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={EnvLogo} alt = 'evironmental logo' className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {env.url} key = {env._id} target="_blank" rel = 'noreferrer'>{env.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{env.location}</h4>
                            <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(env._id)}}><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            <p className = "mission">{env.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default EnvironmentalList;