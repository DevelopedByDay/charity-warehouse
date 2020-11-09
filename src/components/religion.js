

import React, {useState} from 'react';
import religionsLogo from '../assets/religions.png';
import {FaHeart} from 'react-icons/fa';


const ReligionList = () => {
    
    const [religions] = useState([
        {
            name: 'AMG International',
            category: 'religion',
            location: 'Chattanooga, TN',
            url: 'https://amginternational.org/',
            mission: `Founded in 1942, AMG (Advancing the Ministries of the Gospel) International 
                        is an evangelical mission and relief agency, working in approximately
                        50 countries of the world. Our mission is clear: to give each person at 
                        least one opportunity to hear and respond to the gospel. At AMG, we 
                        endeavor to meet people at the point of their need whether it be hunger, 
                        sickness, or hopelessness, and show them Jesus as the only answer to the 
                        problems of this life and the only hope for eternal life. Our Christian 
                        missionary activities include children's work and relief, newspaper and 
                        magazine evangelism, radio and television evangelism, and missionary 
                        projects and support.`
        },
        {
            name: 'Audio Scripture Ministries',
            category: 'religion',
            location: 'Holland, MI',
            url: 'https://audioscripture.org/',
            mission: `Audio Scripture Ministries (ASM) helps connect people to God's Word in audio. 
                        We do this by recording and distributing Scripture recordings and Bible 
                        engagement resources in hundreds of languages and countries worldwide. 
                        We work with local leaders, Bible translators, missionaries, and other 
                        ministries who want to connect people to the Bible in their own heart 
                        language, so all will hear. We help train and facilitate recording and 
                        distribution projects, and have recording studios in Mexico, India, 
                        and Mozambique. Additionally, we bring God's Word in audio with efforts 
                        to meet physical and community needs, such as with our Compassionate 
                        Care Program in Mozambique, where our team provides weekly palliative 
                        care visits and spiritual comfort to many in need.`
        },
        {
            name: 'Crossroads Prison Ministries',
            category: 'religion',
            location: 'Grand Rapids, MI',
            url: 'https://cpministries.org/',
            mission: `Crossroad Bible Institute equips the church to disciple people in prison 
                        with the Word of God, free of charge, wherever they are incarcerated. 
                        Millions of incarcerated persons in North America and beyond are in 
                        darkness and searching for a ray of hope. Now, more than ever, people 
                        in prison need the light of God's truth. That's why Crossroad Bible 
                        Institute has been working since 1984 to provide them with faith-based 
                        reentry education, to equip the church to make disciples, to guide 
                        our students into reentry agencies upon their release and to educate 
                        the church on criminal and restorative justice issues.`
        },
        {
            name: 'The Family Radio Network, Inc.',
            category: 'religion',
            location: 'Appleton, WI',
            url: 'https://www.thefamily.net/',
            mission: `The Family is owned and operated by The Family Radio Network, Inc. a 
                        non-profit organization, founded in 1969. The Family's mission is 
                        to broadcast the hope of Jesus Christ to strengthen and encourage listeners.`
        },
        {
            name: 'Far East Broadcasting Company',
            category: 'religion',
            location: 'La Miranda, CA',
            url: 'https://www.febc.org/',
            mission: `Founded in 1945, Far East Broadcasting Company (FEBC) is a non-denominational, 
                        international Christian radio network that broadcasts the Good News in more 
                        than 150 languages from 32 transmitters located throughout the world. 
                        FEBC's mission is to develop radio programming and deliver it to listeners 
                        in Asia in such a way that they move toward Jesus Christ and into His Kingdom, 
                        that they know Him as Savior, Lord, and King, follow His teaching, and 
                        live in obedience to Him as His servants, and as members of a local body 
                        of believers. FEBC overcomes the barriers of poverty, geography, and 
                        persecution to share Christ's love through radio and internet broadcasts.`
        },
        {
            name: 'Foundation for Jewish Camp',
            category: 'religion',
            location: 'New York, NY',
            url: 'https://jewishcamp.org/',
            mission: `Founded in 1997, Foundation for Jewish Camp aims to build a strong Jewish 
                        future through transformative Jewish summers. The key to the Jewish 
                        future is Jewish camp. We know from research—and nearly two decades' 
                        experience—that this is where young people find Jewish role models and 
                        create enduring Jewish friendships. It's where they forge a vital, lifelong 
                        connection to their essential Jewishness. Suddenly, all those Shabbat song 
                        sessions and campfire stories take on new importance—and urgency. So we're 
                        devoted to helping Jewish camps and summer programs thrive. We gather data, 
                        build new programs, provide operational support and help recruit campers. 
                        We've elevated camp management into a true profession. And we work to 
                        elevate Jewish camp on the cultural and philanthropic agenda.`
        },
        {
            name: 'Hope International',
            category: 'religion',
            location: 'Lancaster, PA',
            url: 'https://www.hopeinternational.org/',
            mission: `Founded in 1997, HOPE International (HOPE) is a Christian faith-based 
                        non-profit organization focused on alleviating physical and spiritual 
                        poverty through microenterprise development. HOPE believes that microfinance 
                        can be a powerful force in changing the world for the better and that loving 
                        people as Christ loved others means caring for both physical and spiritual 
                        needs. HOPE practices a holistic approach to poverty alleviation. Microcredit 
                        and basic business training enable individuals to build businesses and break 
                        free from physical poverty. Clients find that their increased income enables 
                        them to provide more nutritious and regular meals as well as improved housing 
                        and education for their children.`
        },
        {
            name: 'Youth for Christ International',
            category: 'religion',
            location: 'Englewood, CO',
            url: 'https://yfci.org/',
            mission: `Founded in 1944, Youth for Christ (YFC) is a worldwide Christian movement 
                        working with young people around the globe. Motivated by their faith in 
                        Jesus Christ they share the good news of God with young people. Youth for 
                        Christ is made up of tens of thousands of primarily volunteer indigenous 
                        people in over 100 nations working together in giving every young person an 
                        opportunity to be a follower of Jesus Christ and become a part of a local church. 
                        YFC is committed to take the Gospel of Jesus Christ to all young people and always 
                        seek to do so with urgency, using the most culturally acceptable means.`
        },
        {
            name: 'Moms in Prayer International',
            category: 'religion',
            location: 'Poway, CA',
            url: 'https://momsinprayer.org/',
            mission: `Moms in Prayer International impacts children and schools worldwide for Christ by 
                        gathering mothers to pray. We desire to be a supportive partner, building up the 
                        Body of Christ through prayer. We teach women how to pray corporately by using four 
                        biblical prayer principles, called the Four Steps of Prayer: Praise, silent Confession, 
                        Thanksgiving and Intercession. As women from the church become involved in a Moms in 
                        Prayer group, the result will be children being prayed for in the church. Praying for 
                        children and schools in the community has a powerful influence that reverberates 
                        throughout the city and state.`
        },
        {
            name: 'Proverbs 31 Ministries',
            category: 'religion',
            location: 'Matthews, NC',
            url: 'https://proverbs31.org/',
            mission: `Proverbs 31 Ministries is a non-denominational, non-profit Christian ministry that seeks 
                        to lead women into a personal relationship with Christ. With Proverbs 31:10-31 as a 
                        guide, Proverbs 31 Ministries reaches women in the middle of their busy days through 
                        free devotions, daily radio message, speaking events, conferences, resources, online 
                        Bible studies, and training in the call to write, speak and lead others. We are real 
                        women offering real-life solutions to those striving to maintain life's balance, in 
                        spite of today's hectic pace and cultural pull away from godly principles. Wherever a 
                        woman may be on her spiritual journey, Proverbs 31 Ministries exists to be a trusted 
                        friend who understands the challenges she faces, walks by her side, encouraging her as 
                        she walks toward the heart of God.`
        }
    ])

    return (
        <section className="my-5">
            
            <ul class="category">
                {religions.map((religions) => (
                    <li className="my-2" key = {religions.name}>
                     
                        <span className="test flex-row">
                            <div className = "charCardHeader">
                               <img src={religionsLogo} className="charLogo"/>
                            <h2 className="categoryName">
                            <a href= {religions.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank" rel = 'noreferrer'>{religions.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{religions.location}</h4>
                                
                                <div className = 'donateFavorite'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' type = 'submit'><FaHeart /> Favorite</button>
                                </div>
                            </div>
                            
                            <p className = "mission">{religions.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ReligionList;