

import React, {useState} from 'react';
import AnimalsLogo from '../assets/Animals.png';

const AnimalList = () => {

    const [animals] = useState([
        {
            // id: 1,
            // icon: AnimalsLogo,
            name: 'Alley Cat Allies',
            category: 'animals',
            location: 'Bethesda, MD',
            url: 'https://www.alleycat.org/',
            mission: `Founded in 1990, Alley Cat Allies is dedicated to the protection and humane treatment of cats. 
                        Our mission is to end the killing of cats and lead the movement for their humane care. 
                        Alley Cat Allies has charted a course set on animal control and shelter industry reform 
                        and humane treatment through activities including: advocating for pounds and shelters to keep 
                        public records of animal intake and kill rates, for public and mandatory government oversight, 
                        and for increased pound and shelter accountability; mobilizing and educating the public and leading 
                        the national movement to end the killing of cats and to protect and improve their lives; and 
                        supporting the efforts of, and acting as the national voice for, thousands of individuals and groups 
                        across the U.S. who provide humane care for stray and feral cats.`
        },
        {
            // id: 2,
            name: 'Wildlife Rescue & Rehabilitation',
            category: 'animals',
            location: 'Kendalia, TX',
            url: 'https://wildlife-rescue.org/',
            mission: `To rescue, rehabilitate, and release native wildlife and to provide sanctuary, individualized care, 
                        and a voice for other animals in need.`
        },
        {
            // id: 3,
            name: 'Israel Guide Dog Center for the Blind',
            category: 'animals',
            location: 'Warrington, PA',
            url: 'https://israelguidedog.org/',
            mission: `The Israel Guide Dog Center for the Blind began operations on January 1, 1991 with just one 
                        objective -- to help blind people in Israel to achieve independence and mobility through the use 
                        of guide dogs. The mission of the Israel Guide Dog Center for the Blind is to improve the quality 
                        of life of blind people by providing them with safe mobility, independence and self-confidence 
                        through the faithful assistance of guide dogs. Israel has over 24,000 registered blind people, 
                        although unofficial estimates place this figure much higher. Of these, about 250 are guide dog 
                        assisted, but this number is growing steadily as the number of graduates from the Center 
                        increases annually.`
        },
        {
            // id: 4,
            name: 'American Eagle Foundation',
            category: 'animals',
            location: 'Pigeon Forge, TN',
            url: 'https://www.eagles.org/',
            mission: `The American Eagle Foundation (AEF) is dedicated to protecting the majestic Bald Eagle, the USA's 
                        National Symbol, and its habitat by supporting and conducting eagle and environmental recovery 
                        and education programs. The AEF cares for a collection of about 80 non-releasable birds of 
                        prey daily (including 47 eagles), which play an important role in its education and breeding 
                        programs. Also, numerous orphaned and injured raptors are rescued, rehabilitated and released.`
        },
        {
            // id: 5,
            name: 'Big Cat Rescue',
            category: 'animals',
            location: 'Tampa, FL',
            url: 'https://bigcatrescue.org/',
            mission: `Our Mission is to provide the best home we can for the cats in our care, end abuse of big cats 
                        in captivity, and prevent extinction of big cats in the wild.`
        },
        {
            // id: 6,
            name: 'The Elephant Sanctuary',
            category: 'animals',
            location: 'Hohenwald, TN',
            url: 'https://www.elephants.com/',
            mission: `The Elephant Sanctuary in Tennessee, founded in 1995, is the nation's largest natural habitat 
                        refuge developed specifically for endangered African and Asian elephants. The Sanctuary 
                        operates on 2,700 acres in Hohenwald, Tennessee-85 miles southwest of Nashville. The Elephant 
                        Sanctuary exists to provide captive elephants with individualized care, the companionship 
                        of a herd, and the opportunity to live out their lives in a safe haven dedicated to their 
                        well-being; and to raise public awareness of the complex needs of elephants in captivity, 
                        and the crisis facing elephants in the wild. As a true sanctuary, The Elephant Sanctuary 
                        is not intended to provide entertainment, and it is therefore closed to the general public.`
        },
        {
            // id: 7,
            name: 'Loggerhead Marinelife Center',
            category: 'animals',
            location: 'Juno Beach, FL',
            url: 'https://marinelife.org/',
            mission: `Loggerhead Marinelife Center (LMC) is a non-profit sea turtle hospital that promotes 
                        conservation of ocean ecosystems with a focus on threatened and endangered sea turtles.`
        },
        {
            // id: 8,
            name: 'Monterey Bay Aquarium',
            category: 'animals',
            location: 'Monterey, CA',
            url: 'https://www.montereybayaquarium.org/',
            mission: `Opened in 1984, the Monterey Bay Aquarium's mission is to inspire conservation of the 
                        oceans. We know that bringing people face-to-face with living marine animals is a 
                        powerful way to move them to care about the oceans and ocean life. From the beginning, 
                        we planned our permanent exhibits as a walk through Monterey Bay's beautiful natural 
                        communities. In 1996, we almost doubled our exhibit space with the opening of the 
                        Outer Bay Wing, devoted to the open ocean and deep sea. The main feature is the 
                        Outer Bay Waters exhibit, the one-million-gallon tank containing tuna, sharks and 
                        sea turtles. The aquarium has an active research program. We have groups working on 
                        sea otter conservation and tuna conservation biology. About 1.8 million people 
                        visit us each year.`
        },
        {
            // id: 9,
            name: 'The Living Desert',
            category: 'animals',
            location: 'Palm Desert, CA',
            url: 'https://www.livingdesert.org/',
            mission: `The Living Desert was established in March 1970 as a 360 acre wilderness preserve. 
                        Today it is one of the most unique institutions in the country and stands out as 
                        the only American zoo and garden dedicated solely to interpreting and conserving 
                        the deserts of the world and is the only zoological and botanical park specializing 
                        in just one entire ecosystem. The Living Desert has set aside 1,000 acres of natural 
                        desert habitat. We foster, through interpretive exhibits, programs and publication, 
                        an awareness of and an appreciation for, the variety of plants and animals in 
                        worldwide desert ecosystems.`
        },
        {
            // id: 10,
            name: 'Wildlife Conservation Society',
            category: 'animals',
            location: 'Bronx, NY',
            url: 'https://www.wcs.org/',
            mission: `The Wildlife Conservation Society (WCS), founded in 1895 saves wildlife and wild 
                        places worldwide. We do so through science, global conservation, education and 
                        the management of the world's largest system of urban wildlife parks, led by 
                        the flagship Bronx Zoo. Together these activities change attitudes towards 
                        nature and help people imagine wildlife and humans living in harmony. We 
                        currently manage about 500 conservation projects in more than 60 countries; 
                        and educate millions of visitors at our five living institutions in New York 
                        City on important issues affecting our planet. Our parks include: the Bronx 
                        Zoo, New York Aquarium, Central Park Zoo, Prospect Park Zoo and Queens Zoo. 
                        The WCS parks in New York City welcome 4 million visitors each year, 
                        including helping the city to educate millions of schoolchildren in science 
                        and conservation issues.`
        }
    ])


    return (
        <section className="my-5">
            {/* <h1 id="">Animal Related Charities</h1> */}
            <ul class="category">
                {animals.map((animal) => (
                    <li className="my-2" key = {animal.name}>
                        {/* <div>{animal.logo}</div>
                        <div>{AnimalsLogo}</div> */}
                        
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={AnimalsLogo} className="charLogo flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {animal.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank">{animal.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{animal.location}</h4>
                            </div>
                            
                            <p>{animal.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AnimalList;