

import React, {useState} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import AnimalList from '../animal';
import CommDevList from '../community';
import ReligionList from '../religion';


const SingleCategory = ({category}) => {

    const [categories] = useState([
        { name: 'animals'},
        { name: 'community'},
        { name: 'religion'}
    ]);

    const selectedCategory = categories.filter((category) => category.name === category);


    return (
        <div>
            <div>
                {selectedCategory.map((charity) =>
                    <a href = {`../${charity}.js`} />)}
            </div>
        </div>
    )
}

export default SingleCategory;