import React, { useState } from 'react';
import ArtsLogo from '../assets/Arts.png';

const ArtsList = () => {

    const [arts] = useState([

        {
            name: 'The Actors Fund',
            category: 'arts & humanities',
            location: 'New York, NY',
            url: `https://actorsfund.org/`,
            mission: `The Actors Fund is a national human services organization that fosters stability and resiliency, and provides a safety net for performing arts and entertainment professionals over their lifespan. Through offices in New York, Los Angeles and Chicago, The Fund serves everyone in film, theater, television, music, opera, radio and dance with programs including social services and emergency financial assistance, health care and insurance counseling, housing, and secondary employment and training services.`
        },

        {
            name: 'All Classical Portland',
            category: 'arts & humanities',
            location: 'Portland, OR',
            mission: `All Classical Portland is Portland, Oregon's classical radio station. Established in 1983, All Classical Portland's mission is to advance knowledge of and appreciation for classical music; to build and sustain culturally vibrant local and global communities around this art form; to reflect the spirit of the Pacific Northwest; and to foster integrity, quality, and innovation in all that we do.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=8198`
        },

        {
            name: 'American Ballet Theatre',
            category: 'arts & humanities',
            location: 'New York, NY',
            mission: `American Ballet Theatre (ABT) is recognized as one of the great dance companies in the world. Few ballet companies equal ABT for its combination of size, scope and outreach. Recognized as a living national treasure since its founding in 1940, ABT annually tours the United States, performing for more than 600,000 people, and is the only major cultural institution to do so. It has also made more than 15 international tours to 42 countries as perhaps the most representative American ballet company and has been sponsored by the State Department of the United States on many of these engagements`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3335`
        },

        {
            name: 'American Museum of Natural History',
            category: 'arts & humanities',
            location: 'New York, NY',
            mission: `The American Museum of Natural History (AMNH) is one of the world's preeminent scientific and cultural institutions. Since its founding in 1869, the Museum has advanced its global mission to discover, interpret and disseminate information about human cultures, the natural world and the universe through a wide-ranging program of scientific research, education and exhibition. The Museum is renowned for its exhibitions and scientific collections, which serve as a field guide to the entire planet and present a panorama of the world's cultures.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3276`
        },

        {
            name: 'Center for Puppetry Arts',
            category: 'arts & humanities',
            location: 'Atlanta, GA',
            mission: `The Center for Puppetry Arts' mission is to inspire imagination, education, and community through the global art of puppetry. The Center's doors opened in September 1978, with Kermit the Frog and his creator Jim Henson cutting the ceremonial ribbon. Founded by Vincent Anthony, the Center filled a need for a place in the US where puppetry could be explored by both artists and audiences. Today, the Center has grown to be the largest non-profit organization in the nation dedicated solely to the art of puppetry.
            For more than forty years, the Center has introduced millions of visitors of all ages to the wonder and artistry of puppetry through three key programming areas: Performance, Museum, and Education. These program areas work in tandem to showcase puppetry in action, as a fine art, and as a gateway to imagination`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=10255`
        },

        {
            name: 'Chicago Shakespeare Theatre',
            category: 'arts & humanities',
            location: 'Chicago, IL',
            mission: `Chicago Shakespeare Theater (CST) offers a broad spectrum of theatrical experiences year-round, engaging and entertaining audiences from all walks of life and from around the world. The plays of William Shakespeare form the core of our company's work and subscription series, featuring selections from Shakespeare's 38-play canon complemented by other dramatic works - from traditional classical theater to new classics that resonate with Shakespeare's timeless insights into the human condition. As Chicago Shakespeare strives to share our uniquely American brand of Shakespeare with the world, so do we also strive to bring to Chicago some of the best theater the world has to offer. To our World's Stage Series, we bring international theatrical productions to our city, presenting new cultural expressions and experiences for Chicago audiences and artists alike.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5268`
        },

        {
            name: 'Community Radio for Northern Chicago',
            category: 'arts & humanities',
            location: 'Greeley, CO',
            mission: `Community Radio for Northern Colorado's mission is to cultivate the mind and spirit, to inform, inspire and entertain, and to strengthen the community. CRNC strives to meet its mission through its public radio stations, KUNC-FM, KRNC-FM, KENC-FM, KVNC-FM, KMPF-FM, and its network of translators`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=9720`
        },

        {
            name: 'The Computer History Museum',
            category: 'arts & humanities',
            location: 'Mountain View, CA',
            mission: `The mission of the Computer History Museum is to preserve and present for posterity the artifacts and stories of the information age. As such, the Museum plays a unique role in the history of the computing revolution. Formally established in 1999, the Museum is dedicated to the preservation and celebration of computing history. We are home to one of the largest international collections of computing artifacts in the world, encompassing physical objects, ephemera, photographs, moving images, documents and software. The Museum's vision is to explore the computing revolution and its impact on the human experience.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=8714`
        },

        {
            name: 'Milwaukee Art Museum',
            category: 'arts & humanities',
            location: 'Milwaukee, WI',
            mission: `The Milwaukee Art Museum (MAM) collects and preserves art, presenting it to the community as a vital source of inspiration and education. Central to the Museum's mission is its role as a premier educational resource, with educational programs that are among the largest in the nation, involving classes, tours, and a full calendar of events for all ages. From its roots in Milwaukee's first art gallery in 1888, the Museum has grown today to be an icon for Milwaukee and a resource for the entire state. Four floors of over forty galleries of art are rotated regularly with works from antiquity to the present in the Museum's far-reaching collection. Included in the Collection are 15th- to 20th-century European and 17th- to 20th-century American paintings, sculpture, prints, drawings, decorative arts, photographs, and folk and self-taught art.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=5310`
        },

        {
            name: 'Minnesota Public Radio | American Public Media',
            category: 'arts & humanities',
            location: 'St. Paul, MN',
            mission: `Founded in 1967, Minnesota Public Radio | American Public Media (MPR | APM) works to enrich the mind and nourish the spirit, thereby assisting our audiences to enhance their lives, expand perspectives and strengthen their communities. MPR is one of the nation's premier public radio stations producing programming for radio, Internet and face-to-face audiences. MPR provides three services - News and Information Service, Classical Music Service and The Current - operating a 45-station regional radio network and serving a regional population of five million people. APM is the nation's second-largest producer of public radio programs, reaching 18 million listeners each week through more than 900 radio stations nationwide. National programs include A Prairie Home Companion®, Marketplace®, The Splendid Table®, Performance Today®, Dinner Party Download®, Wits™, American RadioWorks® and others.`,
            url: `https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4108`
        }
    ])

    return (
        <section className="my-5">
            {/* <h1>Arts and Humanities</h1> */}
            <ul class="category">
                {arts.map((arts) => (
                    <li className="my-2" key = {arts.name}>

                        <span className="test flex-row">
                            <div className = "flex-row">
                                <img src={ArtsLogo} className="miniLogo flex-row"/>
                            <h2 className="categoryName flex-row">
                            <a href= {arts.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank">{arts.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{arts.location}</h4>
                            </div>
                            <p>{arts.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ArtsList;