import React from 'react';
import EnvLogo from '../../assets/Environmental.png';
import {FaHeart} from 'react-icons/fa';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import {ADD_CHARITY} from '../../utils/mutations';
import {useParams} from 'react-router-dom';



const EnvironmentalList = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];

    const {username: userParam} = useParams();

    const [addCharity] = useMutation(ADD_CHARITY);

    const environment = charities.filter((enviro) => enviro.category === 'environmental');
    console.log(environment);
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
                {environment.map((env) => (
                    <li className="my-2" key = {env._id}>
                        
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={EnvLogo} className="charLogo  flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {env.url} key = {env._id} target="_blank" rel = 'noreferrer'>{env.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{env.location}</h4>
                            <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' onClick = {() => {handleClick(env._id)}}><FaHeart /></button>
                                </div>
                            </div>
                            
                            <p>{env.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default EnvironmentalList;