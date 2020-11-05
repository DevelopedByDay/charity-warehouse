

import React, {useState} from 'react';
import CommunityLogo from '../assets/Community.png';

const CommDevList = () => {

    const [comdevs] = useState([
        {
            name: 'Association for Enterprise Opportunity',
            category: 'commdev',
            location: 'Washington, DC',
            url: 'https://aeoworks.org/',
            mission: `Founded in 1991, Association for Enterprise Opportunity (AEO) is 
                        the only national membership association committed to microenterprise 
                        development as an effective economic development strategy and a powerful 
                        poverty alleviation tool. AEO provides its members with a forum, 
                        information, and a voice to promote enterprise opportunity for people 
                        and communities with limited resources. AEO currently has a membership 
                        that stretches across the 50 states, the District of Columbia, and Puerto 
                        Rico and includes all key agencies and organizations that provide 
                        microenterprise services to disadvantaged microentrepreneurs. The 
                        combined reach of these organizations exceeds 300,000 microentrepreneurs 
                        and small business owners annually.`
        },
        {
            name: 'Asian Pacific Environmental Network',
            category: 'commdev',
            location: 'Oakland, CA',
            url: 'http://apen4ej.org/',
            mission: `Founded in 1993, the Asian Pacific Environmental Network (APEN) seeks to 
                        empower low-income Asian Pacific Islander (API) communities to achieve 
                        environmental and social justice. APEN believes that the environment 
                        includes everything around us: where we live, work and play. We strive 
                        to build grassroots organizations that will improve the health, well-being 
                        and political strength of our communities. APEN currently works on three 
                        levels: direct organizing in local communities; building a network of API 
                        organizations; and working in multiracial alliances to affect regional and 
                        national social change.`
        },
        {
            name: 'Building Goodness Foundation',
            category: 'commdev',
            location: 'Charlottesville, VA',
            url: 'https://www.buildinggoodness.org/',
            mission: `Founded in 1999, Building Goodness Foundation (BGF) works to build community 
                        and improve lives. Their purpose is to bring together volunteers from every 
                        part of the construction industry to design and build structures for 
                        communities in need. Together with their partners, they use donations of 
                        time, money, materials, and expertise to build clinics, schools, community 
                        centers, and specialized housing for those who need them most, both in their 
                        own community and around the world. Non-construction volunteers are a critical 
                        part of their team. And, beyond the bricks and mortar of a new structure, 
                        BGF volunteers build lasting relationships with the people they are helping, 
                        relationships that profoundly improve the lives of all involved.`
        },
        {
            name: 'Catholic Charities',
            category: 'commdev',
            location: 'San Francisco, CA',
            url: 'https://www.catholiccharitiessf.org/',
            mission: `Founded more than a century and a half ago to care for the orphans of the San 
                        Francisco earthquake, Catholic Charities is one of the largest, most 
                        comprehensive human services agencies in Northern California, reaching more 
                        than 32,000 individuals a year.`
        },
        {
            name: 'Corporation for Supportive Housing',
            category: 'commdev',
            location: 'New York, NY',
            url: 'https://www.csh.org/',
            mission: `CSH's mission is to advance housing solutions that deliver three powerful 
                        outcomes: 1) improved lives for the most vulnerable people 2) maximized public 
                        resources and 3) strong, healthy communities across the country.`
        },
        {
            name: 'DreamSpring',
            category: 'commdev',
            location: 'Albuquerque, NM',
            url: 'https://www.dreamspring.org/',
            mission: `DreamSpring (formerly Accion serving Arizona, Colorado, Nevada, New Mexico and Texas) 
                        increases access to business credit, makes loans, and provides training which 
                        enable entrepreneurs to realize their dreams and be catalysts for positive economic 
                        and social change. Our unique approach - called microlending - can trace its 
                        roots back more than 40 years with efforts to reduce extreme poverty in Latin 
                        America. Now, the organization supports small business owners in Arizona, 
                        Colorado, Nevada, New Mexico, and Texas generate income and enhance economic 
                        security for themselves, their families, and their communities. Since making 
                        our first loan in 1994, we have helped small business owners in more than 445 
                        communities, working in some of these states' most underserved urban neighborhoods 
                        and most isolated rural communities.`
        },
        {
            name: 'Enterprise Community Partners, Inc.',
            category: 'commdev',
            location: 'Columbia, MD',
            url: 'https://www.enterprisecommunity.org/',
            mission: `Where we live matters: We make well-designed homes affordable and create communities 
                        with connections to opportunity so everyone can thrive. Enterprise is the only 
                        housing organization in the U.S. with the expertise to multiply the impact for 
                        people and communities. We deliver the capital, develop the programs and advocate 
                        for the policies needed to create and preserve well-designed homes that people 
                        can afford in inclusive and connected communities. To date, Enterprise has 
                        created nearly 585,000 homes, invested $43.6 billion and touched millions of 
                        lives. And there's more work to be done.`
        },
        {
            name: 'Foundation for Financial Planning',
            category: 'commdev',
            location: 'Washington, DC',
            url: 'https://ffpprobono.org/',
            mission: `The Foundation for Financial Planning works to help people take control of their 
                        financial lives by connecting the financial planning community with people in 
                        need. We achieve this by supporting pro bono advice and outreach activities.`
        },
        {
            name: 'Greenlight Fund',
            category: 'commdev',
            location: 'Boston, MA',
            url: 'https://greenlightfund.org/',
            mission: `The GreenLight Fund “greenlights” powerful programs that can help solve critical 
                        local needs, speeding their entry into the new location and giving them a 
                        strong start in the local community. With the help of a Selection Advisory 
                        Council, the GreenLight Fund identifies urgent needs in the local community 
                        and vets potential organizations based on their ability to meet these needs 
                        and build on the landscape of organizations already working in the community. 
                        Once an organization is “greenlighted” for the local community, the GreenLight 
                        Fund partners with the organization to build a strong local organizational 
                        foundation and launch the program as quickly as possible. The GreenLight 
                        Fund provides critical support during the first four-six years of a program's 
                        life in the new community. GreenLight is an on-the-ground partner invested 
                        in the early and long-term success of the organization.`
        },
        {
            name: 'Robin Hood Foundation',
            category: 'commdev',
            location: 'New York, NY',
            url: 'https://www.robinhood.org/',
            mission: `Since 1988, the Robin Hood Foundation has targeted poverty in New York City. 
                        By applying sound investment principles to philanthropy, we've helped the 
                        best programs save lives and change fates. Robin Hood's work comes in many 
                        forms. We partner with more than 240 of the best poverty-fighting nonprofit 
                        organizations in New York City. We initiate and run projects when we see 
                        unmet community needs. And we created and operate a 9/11 Relief Fund. 
                        While there is great diversity among these programs, they all have one 
                        thing in common: They work.`
        }
    ])

    return (
        <section className="my-5">
            {/* <h1 id="">Animal Related Charities</h1> */}
            <ul class="category">
                {comdevs.map((community) => (
                    <li className="my-2" key = {community.name}>
                        {/* <div>{animal.logo}</div>
                        <div>{AnimalsLogo}</div> */}
                        
                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={CommunityLogo} className="charLogo  flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {community.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank">{community.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{community.location}</h4>
                            </div>
                            
                            <p>{community.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>

        
    )
}

export default CommDevList;