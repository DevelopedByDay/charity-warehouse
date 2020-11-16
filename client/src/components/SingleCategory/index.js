

import React from 'react';
import Hero from '../Hero';
import AnimalsLogo from '../../assets/Animals.png';
import ArtsLogo from '../../assets/Arts.png';
import CivilLibertiesLogo from '../../assets/Civil-Liberties.png';
import CommunityLogo from '../../assets/Community.png';
import EnvironmentalLogo from '../../assets/Environmental.png';
import ReligionsLogo from '../../assets/religions.png';
import FavoriteLogo from '../../assets/favorites.png';
import SavedCharities from '../SavedCharities';
import AnimalList from '../Animals';
import CivilRightsList from '../CivilRight';
import CommDevList from '../Community';
import EnvironmentalList from '../Environmental';
import ReligionList from '../Religion';
import ArtsList from '../Arts';


const SingleCategory = (charity) => {

    const selectedCategory = (charity) => {
        switch (charity) {
            case 'animals':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={AnimalsLogo} alt = 'animal logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Animal Related Charities</h1>
                        </div>
                        <AnimalList />
                        
                    </div>
                    );
                
            case 'community':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={CommunityLogo} alt = 'community logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Community Related Charities</h1>
                        </div>
                        <CommDevList />
                        
                    </div>
                );
                
            case 'religion':
                return (
                        <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={ReligionsLogo} alt = 'religion logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Religious Charities</h1>
                        </div>
                        <ReligionList />
                        
                    </div>
                );

            case 'arts' :
                return (

                        <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={ArtsLogo} alt = 'arts logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Arts Charities</h1>
                        </div>
                        <ArtsList />
                        
                    </div>
                );

            case 'civilRights':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={CivilLibertiesLogo} alt = 'civil liberties logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Civil Rights Charities</h1>
                        </div>
                        <CivilRightsList />
                        
                    </div>
                );

            case 'environmental':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={EnvironmentalLogo} alt = 'environmental logo' className="categoryLogo"/>
                            <h1 className="categoryDescription"> Environmental Charities</h1>
                        </div>
                        <EnvironmentalList />
                        
                    </div>


                );

                case 'favorites':
                return (
                    <div className="flex-row">
                        <div className="categoryHeader">
                            <img src={FavoriteLogo} alt = 'favorites logo' className="categoryLogo"/>
                            <h1 className="categoryDescription">My Charities</h1>
                        </div>
                        <SavedCharities />
                        
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


export default SingleCategory;