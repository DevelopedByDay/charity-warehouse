

import React from 'react';
import AnimalList from '../animal';
import CommDevList from '../community';
import ReligionList from '../religion';
import ArtsList from '../arts';
import CivilRightsList from '../civil-rights';
import EnvironmentalList from '../environmental';
import AnimalsLogo from '../../assets/Animals.png';
import ArtsLogo from '../../assets/Arts.png';
import civilRightsLogo from '../../assets/Civil-Liberties.png';
import EnvLogo from '../../assets/Environmental.png';
import religionsLogo from '../../assets/religions.png';
import CommunityLogo from '../../assets/Community.png';

const SingleCategory = (category) => {
console.log(category);

    const selectedCategory = (category) => {
        switch (category) {
            case 'animals':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={AnimalsLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Animal Related Charities</h1>
                        </div>
                        
                        <AnimalList />
                        
                    </div>
                    );
                
            case 'community':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={CommunityLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Community Related Charities</h1>
                        </div>
                        
                        <CommDevList />
                        
                    </div>
                );
                
            case 'religion':
                return (
                        <div className="flex-row">
                        <div className="flex-row">
                            <img src={religionsLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Religious Charities</h1>
                        </div>
                        
                        <ReligionList />
                        
                    </div>
                );

            case 'arts' :
                return (

                        <div className="flex-row">
                        <div className="flex-row">
                            <img src={ArtsLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Arts Charities</h1>
                        </div>
                        
                        <ArtsList />
                        
                    </div>
                );

            case 'civil-rights':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={civilRightsLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Civil Rights Charities</h1>
                        </div>
                        
                        <CivilRightsList />
                        
                    </div>
                );

            case 'environmental':
                return (
                    <div className="flex-row">
                        <div className="flex-row">
                            <img src={EnvLogo} className="categoryLogo flex-row"/>
                            <h1 className="flex-row paddingAuto"> Environmental Charities</h1>
                        </div>
                        
                        <EnvironmentalList />
                        
                    </div>


                );
                
            default:
                break;
    }
}

    return (
        <div>
            <div>
                {selectedCategory(category.currentCategory.name)}
            </div>
        </div>
    )
}

export default SingleCategory;