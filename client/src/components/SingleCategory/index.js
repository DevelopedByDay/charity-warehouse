

import React from 'react';
import Hero from '../Hero';
import AnimalsLogo from '../../assets/Animals.png';
import ArtsLogo from '../../assets/Arts.png';
import CivilLibertiesLogo from '../../assets/Civil-Liberties.png';
import CommunityLogo from '../../assets/Community.png';
import EnvironmentalLogo from '../../assets/Environmental.png';
import ReligionsLogo from '../../assets/religions.png';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_CHARITIES} from '../../utils/queries';
import AnimalList from '../Animals';

import CivilRightsList from '../CivilRight';
import CommDevList from '../Community';
import EnvironmentalList from '../Environmental';
import ReligionList from '../Religion';
import ArtsList from '../Arts';


const SingleCategory = (charity) => {
    const {loading, data} = useQuery(QUERY_CHARITIES);
    const charities = data?.charities || [];
    console.log(charities);

    const selectedCategory = (charity) => {
        switch (charity) {
            case 'animals':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={AnimalsLogo} className="categoryLogo flex-row"/>
                            <h1 className="paddingAuto flex-row"> Animal Related Charities</h1>
                        </div>
                        <AnimalList />
                        
                    </div>
                    );
                
            case 'community':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={CommunityLogo} className="categoryLogo flex-row" alt = 'community logo'/>
                            <h1 className="flex-row paddingAuto"> Community Related Charities</h1>
                        </div>
                        
                        <CommDevList />
                        
                    </div>
                );
                
            case 'religion':
                return (
                        <div className="flex-row">
                        <div className="flex-row">
                            <img src={ReligionsLogo} className="categoryLogo flex-row" alt = 'religion logo'/>
                            <h1 className="flex-row paddingAuto"> Religious Charities</h1>
                        </div>
                        
                        <ReligionList />
                        
                    </div>
                );

            case 'arts' :
                return (

                        <div className="flex-row">
                        <div className="flex-row">
                            <img src={ArtsLogo} className="categoryLogo flex-row" alt = 'art logo'/>
                            <h1 className="flex-row paddingAuto"> Arts Charities</h1>
                        </div>
                        
                        <ArtsList />
                        
                    </div>
                );

            case 'civil-rights':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={CivilLibertiesLogo} className="categoryLogo flex-row" alt = 'civil rights logo'/>
                            <h1 className="flex-row paddingAuto"> Civil Rights Charities</h1>
                        </div>
                        
                        <CivilRightsList />
                        
                    </div>
                );

            case 'environmental':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={EnvironmentalLogo} className="categoryLogo flex-row" alt = 'environmental logo'/>
                            <h1 className="flex-row paddingAuto"> Environmental Charities</h1>
                        </div>
                        
                        <EnvironmentalList />
                        
                    </div>


                );
                
            default:
                return (
                    <div>
                        <Hero />
                    </div>
                );
    }
}

    return (
        <div>
            <div>
               
                {selectedCategory(charity.currentCategory.name)}
                
            </div>
        </div>
    )
}

// import React from 'react';
// import {Link} from 'react-router-dom';

// const CharityList = ({name, location, url, mission, category}) => {
    
//     return (
//         <div>
//             <h5>
//                 {category}
//             </h5>
//             {category && category.map(singleCategory => (
//                 <div key = {category._id} 
//             ))}
//         </div>
//     )
// }

export default SingleCategory;