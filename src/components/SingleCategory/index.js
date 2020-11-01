

import React from 'react';
import AnimalList from '../animal';
import CommDevList from '../community';
import ReligionList from '../religion';
import ArtsList from '../arts';
import CivilRightsList from '../civil-rights';
import EnvironmentalList from '../environmental';

const SingleCategory = (category) => {
console.log(category);

    const selectedCategory = (category) => {
        switch (category) {
            case 'animals':
                return (
                    <div>
                        <AnimalList />
                    </div>);
                
            case 'community':
                return (
                    <div>
                        <CommDevList />
                    </div>
                );
                
            case 'religion':
                return (
                    <div>
                        <ReligionList />
                    </div>
                );

            case 'arts' :
                return (
                    <div>
                        <ArtsList />
                    </div>
                );

            case 'civil-rights':
                return (
                    <div>
                        <CivilRightsList />
                    </div>
                );

            case 'environmental':
                return (
                    <div>
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