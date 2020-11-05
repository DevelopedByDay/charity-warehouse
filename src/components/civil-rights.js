import React, {useState} from 'react';
import civilRightsLogo from '../assets/Civil-Liberties.png';
import {FaHeart} from 'react-icons/fa';

const CivilRightsList = () => {

    const [civilRights] = useState([

      {
        name: 'Advocates International',
        category: 'civil rights',
        location: 'Alexandria, VA',
        mission: `Advocates International (AI) is guided in its mission and methods by Christ's Good Samaritan parable. Working relationally, professionally, and spiritually with those in law and related professions, AI seeks to encourage and enable a global network of skilled advocates committed to religious liberty, human rights, conflict resolution, reconciliation, and professional ethics. AI's global network has been active since 1991 in promoting religious freedom and human rights, reconciliation and justice, ethics and the integration of faith and practice. The network links over 30,000 law professionals in 150 nations, including those in 30 former or current communist nations and in over 70 nations where religious freedom is under attack`,
          url: 'http://www.advocatesinternational.org/'
      },  

      {
        name: 'Advocates for Children of New York',
        category: 'civil rights',
        location: 'New York, NY',
        mission: `Advocates for Children (AFC) of New York promotes access to the best education New York can provide for all students, especially students of color and students from low-income backgrounds. We use uniquely integrated strategies to advance systemic reform, empower families and communities, and advocate for the educational rights of individual students. Our services include individual case advocacy, a helpline to assist parents and professionals, and workshops.`,
          url: 'https://www.advocatesforchildren.org/'
      },

      {
        name: 'American Civil Liberties Union Foundation',
        category: 'civil rights',
        location: 'New York, NY',
        mission: `The American Civil Liberties Union (ACLU) Foundation is the arm of the ACLU that conducts litigation and communication efforts. The Foundation provides legal presentation in cases involving issues of civil liberties and constitutional rights ranging from administrative hearings to trials and appeals. In addition, the Foundation educates the public as to civil liberties and constitutional rights by disseminating literature and other publications. The ACLU Foundation preserves and promotes civil rights and liberties as guaranteed by the United States Constitution.`,
          url: 'https://www.aclu.org/'
      },

      {
        name: 'American Immigration Council',
        category: 'civil rights',
        location: 'Washington, DC',
        mission: `The American Immigration Council is a non-partisan organization based in Washington D.C. Our legal, education, policy and exchange programs work to strengthen America by honoring our immigrant history and shaping how Americans think and act towards immigration now and in the future. The American Immigration Council exists to promote the prosperity and cultural richness of our diverse nation by educating citizens about the enduring contributions of America's immigrants, standing up for sensible and humane immigration policies that reflect American values, insisting that our immigration laws be enacted and implemented in a way that honors fundamental constitutional and human rights, working tirelessly to achieve justice and fairness for immigrants under the law.`,
          url: 'http://www.americanimmigrationcouncil.org/'
      },

      {
        name: 'American Sexual Health Association',
        category: 'civil rights',
        location: 'Research Triangle Park, NC',
        mission: `The American Sexual Health Association (ASHA) promotes the sexual health of individuals, families and communities by advocating sound policies and practices and educating the public, professionals and policy makers, in order to foster healthy sexual behaviors and relationships and prevent adverse health outcomes.
        Founded in 1914, our services today provide us the opportunity to make a difference in the health, economic standards and quality of life of people and communities nationwide. ASHA specializes in communications outreach to the public, patients, press, providers, and policy makers by developing and delivering sensitive health information.`,
          url: 'http://www.ashasexualhealth.org/'
      },

      {
        name: 'Chicago Foundation for Women',
        category: 'civil rights',
        location: 'Chicago, IL',
        mission: `Chicago Foundation for Women (the "Foundation") invests in women and girls as catalysts, building strong communities for all. The Foundation is a not-for-profit organization dedicated to increasing resources and opportunities for women and girls in the Chicago region through grant making, leadership development, and public and grantee education. Since 1985, the Foundation has awarded nearly 4,000 grants totaling $30 million to organizations and programs that make life better for women and girls. The Foundation improves the lives of women and girls by investing in solutions to the most pressing challenges they face - economic security, violence and access to health care. Because of our broad experience and deep roots in the community, the Foundation remains at the forefront of anticipating new challenges facing women and girls and takes bold, but informed, philanthropic risks. The ultimate goal of all of the Foundation's work is to create lasting, positive change in the lives of women.`,
          url: 'https://www.cfw.org/'
      },

      {
        name: `Colorado Children's Campaign`,
        category: 'civil rights',
        location: 'Denver, CO',
        mission: `The Colorado Children's Campaign works to create hope and opportunity in Colorado, more than one million kids at a time. The Colorado Children's Campaign is a nonpartisan advocacy organization committed for 28 years to creating hope and opportunity for all of Colorado's more than 1.2 million kids. Using the most accurate, compelling data and research on child well-being and backed by an extensive, statewide network of dedicated child advocates, the Children's Campaign champions policies and programs that improve child health, early childhood experiences, and K-12 education, help lift children out of poverty and provide all of Colorado's children the opportunity to reach their full potential.`,
          url: 'https://www.coloradokids.org/'
      },

      {
        name: 'Electronic Frontier Foundation',
        category: 'civil rights',
        location: 'San Francisco, CA',
        mission: `When freedoms in the networked world come under attack, the Electronic Frontier Foundation (EFF) is the first line of defense. EFF broke new ground when it was founded in 1990 - well before the Internet was on most people's radar - and continues to confront cutting-edge issues defending free speech, privacy, innovation, and consumer rights today. From the beginning, EFF has championed the public interest in every critical battle affecting digital rights. EFF fights for freedom primarily in the courts, bringing and defending lawsuits even when that means taking on the U.S. government or large corporations. By mobilizing more than 50,000 concerned citizens through our Action Center, EFF beats back bad legislation. In addition to advising policymakers, EFF educates the press and public.`,
          url: 'https://www.eff.org/'
      },

     {
        name: 'Equal Justice Works',
        category: 'civil rights',
        location: 'Washington, DC',
        mission: `We create opportunities for lawyers to transform their passion for equal justice into a lifelong commitment to public service. Equal Justice Works is a 501(c) (3) nonprofit organization and is the nation's largest facilitator of opportunities in public interest law. Equal Justice Works brings together an extensive network of law students, lawyers, legal services organizations, and supporters to promote a lifelong commitment to public service and equal justice. The organization believes that a community of lawyers committed to public service can fulfill our nation's promise of equal justice for all. Following their Fellowships, more than 85% of Equal Justice Works Fellows remain in public service positions, continuing to pursue equal justice for underserved communities.`,
          url: 'https://www.equaljusticeworks.org/'
      },

      {
        name: 'American Humanist Association',
        category: 'civil rights',
        location: 'Washington, DC',
        mission: `The mission of the American Humanist Association is to advance humanism, an ethical and life-affirming philosophy free of belief in any gods and other supernatural forces. Advocating for equality for non-theists and a society guided by reason, empathy, and our growing knowledge of the world, the AHA promotes a worldview that encourages individuals to live informed and meaningful lives that aspire to the greater good.`,
          url: 'https://americanhumanist.org/'
        }
    ])


    return (
        <section className="my-5">
            {/* <h1>Civil Rights</h1> */}
            <ul class="category">
                {civilRights.map((civilRights) => (
                    <li className="my-2" key = {civilRights.name}>

                        <span className="test flex-row">
                            <div className = "flex-row">
                               <img src={civilRightsLogo} className="miniLogo flex-row" alt = 'civil rights logo'/>
                            <h2 className="categoryName flex-row">
                            <a href= {civilRights.url} onclick="return trackLinkClick('Search Result Click - Name', '', '0|135562279', event);" target="_blank" rel = 'noreferrer'>{civilRights.name}</a>
                            </h2>
                            <h4 className="cityState flex-row">{civilRights.location}</h4>
                            <div className = 'flex-row'>
                                    <button className = 'donate-btn' type = 'submit'>Donate</button>
                                    <button className = 'fave-btn' type = 'submit'><FaHeart /></button>
                                </div>
                            </div>
                            
                            <p>{civilRights.mission}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CivilRightsList;