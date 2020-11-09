import React, { useState } from 'react';
import EnvLogo from '../assets/Environmental.png';
import {FaHeart} from 'react-icons/fa';



const EnvironmentalList = () => {

    const [environmental] = useState([
        {
            name: 'Alliance for the Great Lakes',
            category: 'environmental',
            location: 'Chicago, IL',
            mission: `The mission of the Alliance for the Great Lakes is to: "conserve and restore the world's largest freshwater resource using policy, education and local efforts, ensuring a healthy Great Lakes and clean water for generations of people and wildlife."`,
            url: 'https://greatlakes.org/'
        },

        {
            name: 'Amazon Conservation Association',
            category: 'environmental',
            location: 'Washington, DC',
            mission: `Founded in 1999, the Amazon Conservation Association (ACA) works to conserve the biological diversity of the Amazon. We work to protect biodiversity by studying ecosystems and developing innovative conservation tools to protect land in the region while supporting the livelihoods of local communities. We work by forging ties with governments, nonprofits and people who depend on the rainforests for their livelihood, with the goal of saving rare species and habitats and learning from the land. Scientific research guides our approach, which strives for concrete, measurable achievements. ACA has offices in Washington, DC.`,
            url: 'https://www.amazonconservation.org/'
        },

        {
            name: 'American Forest Foundation',
            category: 'environmental',
            location: 'Washington, DC',
            mission: `The American Forest Foundation works on-the-ground with families, teachers, and elected officials to promote stewardship and protect our nation's forest heritage. AFF is committed to creating a future where North American forests are sustained by the public that understand and values the social, economic, and environmental benefits they provide to our communities, our nation, and the world.`,
            url: 'https://www.forestfoundation.org/'
        },

        {
            name: 'American Rivers',
            category: 'environmental',
            location: 'Washington, DC',
            mission: `American Rivers protects wild rivers, restores damaged rivers, and conserves clean water for people and nature. Since 1973, American Rivers has protected and restored more than 150,000 miles of rivers through advocacy efforts, on-the-ground projects, and an annual America's Most Endangered Rivers® campaign. Headquartered in Washington, DC, American Rivers has offices across the country and more than 200,000 members, supporters, and volunteers. Through our river conservation work we are ensuring clean drinking water supplies, revitalizing fish and wildlife, improving recreation, and leaving a legacy of healthy rivers for future generations.`,
            url: 'https://www.americanrivers.org/'
        },

        {
            name: 'Appalachian Mountain Club',
            category: 'environmental',
            location: 'Boston, MA',
            mission: `Founded in 1876, the Appalachian Mountain Club promotes the protection, enjoyment, and understanding of the mountains, forests, waters, and trails of the Northeast region. We believe these resources have intrinsic worth and also provide recreational opportunities, spiritual renewal, and ecological and economic health for the region. Because successful conservation depends on active engagement with the outdoors, we encourage people to experience, learn about, and appreciate the natural world. Our 16,000 volunteers, 500 full time and seasonal staff, and 285,000 constituents are central to our mission. Our staff offers outdoor experiences and programs through our Northeast and Mid-Atlantic lodging destinations; our 12 volunteer-led chapters located from Maine to Washington, D.C. offer local outdoor activities and skills workshops. Staff and volunteers maintain over 1,800 miles of trails, support our conservation policy and research efforts, and get rural, urban and at-risk youth outdoors.`,
            url: 'https://www.outdoors.org/'
        },

        {
            name: 'The Climate Reality Project',
            category: 'environmental',
            location: 'Washington, DC',
            mission: `Our mission is to catalyze a global solution to the climate crisis by making urgent action a necessity across every level of society.`,
            url: 'https://climaterealityproject.org/'
        },

        {
            name: 'Desert Botanical Gardens',
            category: 'environmental',
            location: 'Phoenix, AZ',
            mission: `Nestled amid the red buttes of Papago Park, the Desert Botanical Garden hosts one of the world's finest collections of desert plants. Founded in 1939, this one-of-a-kind museum showcases 50 acres of beautiful outdoor exhibits. Home to 139 rare, threatened and endangered plant species from around the world, the Garden offers interesting and inspiring experiences to more than 300,000 visitors each year. The Garden's commitment to the community is to advance excellence in education, research, exhibition, and conservation of desert plants of the world with emphasis on the Southwestern United States. We will ensure that the Garden is always a compelling attraction that brings to life the many wonders of the desert.`,
            url: 'https://dbg.org/'
        },

        {
            name: 'Grand Canyon Trust',
            category: 'environmental',
            location: 'Flagstaff, AZ',
            mission: `Founded in 1985, the Grand Canyon Trust protects and restores the Colorado Plateau - its spectacular landscapes, flowing rivers, clean air, diversity of plants and animals, and areas of beauty and solitude. As a regional conservation organization we work for common sense, balanced solutions to significant problems affecting the region's natural resources. Our vision for the Colorado Plateau is: a region still characterized by vast open spaces with restored, healthy natural areas and habitat for all native plants and animals; a sustaining relationship between human communities and the natural environment; and people living and visiting here who are willing and enthusiastic stewards of the region's natural resources and beauty.`,
            url: 'https://www.grandcanyontrust.org/'
        },

        {
            name: 'Greater Yellowstone Coalition',
            category: 'environmental',
            location: 'Bozeman, MT',
            mission: `The Greater Yellowstone Coalition (GYC) was founded in 1983 to protect the lands, waters, and wildlife of the Greater Yellowstone Ecosystem. We emerged as a nationally known advocate for the idea that ecosystem level sustainability and science should guide the management of the region's public and private lands. This vast ecosystem includes twenty million acres of wild country that includes Yellowstone and Grand Teton national parks, parts of six national forests, three national wildlife refuges, and state and private lands in Wyoming, Idaho, and Montana. We work to protect the land from mining, oil and gas, and other such human developments; to ensure rare and imperiled wildlife are sustained, including grizzly bears, bison, wolves and cutthroat trout; and in the face of climate change, to implement adaptation strategies to give wildlife the best chance of survival in an uncertain future, such as by restoring degraded habitats and protecting climate sensitive habitats and species.`,
            url: 'http://greateryellowstone.org/'
        },

        {
            name: 'Rainforest Foundation US',
            category: 'environmental',
            location: 'Brooklyn, NY',
            mission: `The Rainforest Foundation helps protect the incredibly rich biological diversity of the rainforest and the cultural integrity of the peoples whose lives and livelihoods are inextricably linked to those forests. By working with indigenous communities to gain control of their ancestral lands we have helped protect 28 million acres of rainforest. We provide project-related grants and technical support to indigenous groups to secure rights to their lands, influence laws and policies to protect their resources and livelihoods, and build strong and sustainable community leadership.`,
            url: 'https://rainforestfoundation.org/'
        }
    ])


    return (
        <section className="my-5">
            {/* <h1 id="">Animal Related Charities</h1> */}
            <ul class="category">
                {environmental.map((env) => (
                    <li className="my-2" key = {env.name}>
                        {/* <div>{animal.logo}</div>
                        <div>{AnimalsLogo}</div> */}
                        
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={EnvLogo} className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {env.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank" rel = 'noreferrer'>{env.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{env.location}</h4>
                            
                                <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' type = 'submit'><FaHeart /> Favorite</button>
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