

import React, {useState} from 'react';


const CharityList = () => {

    const [charities] = useState([
        {
            name: 'Alley Cat Allies',
            category: 'animals',
            location: 'Bethesda, MD',
            website: 'https://www.alleycat.org/',
            mission: `Founded in 1990, Alley Cat Allies is dedicated to the protection and humane treatment of cats. 
                        Our mission is to end the killing of cats and lead the movement for their humane care. 
                        Alley Cat Allies has charted a course set on animal control and shelter industry reform 
                        and humane treatment through activities including: advocating for pounds and shelters to keep 
                        public records of animal intake and kill rates, for public and mandatory government oversight, 
                        and for increased pound and shelter accountability; mobilizing and educating the public and leading 
                        the national movement to end the killing of cats and to protect and improve their lives; and 
                        supporting the efforts of, and acting as the national voice for, thousands of individuals and groups 
                        across the U.S. who provide humane care for stray and feral cats.`
        }
    ])


    return (
        <div>

        </div>
    )
}

export default CharityList;