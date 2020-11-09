

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
import Hero from '../Hero'

const SingleCategory = (category) => {
console.log(category);

    const selectedCategory = (category) => {
        switch (category) {
            case 'animals':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={AnimalsLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Animal Related Charities</h1>
                        </div>
                        
                        <AnimalList />
                        
                    </div>
                    );
                
            case 'community':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={CommunityLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Community Related Charities</h1>
                        </div>
                        
                        <CommDevList />
                        
                    </div>
                );
                
            case 'religion':
                return (
                        <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={religionsLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Religious Charities</h1>
                        </div>
                        
                        <ReligionList />
                        
                    </div>
                );

            case 'arts' :
                return (

                        <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={ArtsLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Arts Charities</h1>
                        </div>
                        
                        <ArtsList />
                        
                    </div>
                );

            case 'civilRights':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={civilRightsLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Civil Rights Charities</h1>
                        </div>
                        
                        <CivilRightsList />
                        
                    </div>
                );

            case 'environmental':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={EnvLogo} className="categoryLogo"/>
                            <h1 className="categoryDescription"> Environmental Charities</h1>
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
                {selectedCategory(category.currentCategory.name)}
            </div>
        </div>
    )
}

export default SingleCategory;