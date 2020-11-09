

const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/charityWarehouse', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: true,
// });

const db = require('../config/connection');

db.dropCollection("charities");

const Charity = require('../models/Charity');

const charities = [
    new Charity(
            {
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
            }),
    new Charity(
            {
                name: 'Wildlife Rescue & Rehabilitation',
                category: 'animals',
                location: 'Kendalia, TX',
                url: 'https://wildlife-rescue.org/',
                mission: `To rescue, rehabilitate, and release native wildlife and to provide sanctuary, individualized care, 
                            and a voice for other animals in need.`
            }),
    new Charity(
            {
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
            }),
    new Charity(
            {
                name: 'American Eagle Foundation',
                category: 'animals',
                location: 'Pigeon Forge, TN',
                url: 'https://www.eagles.org/',
                mission: `The American Eagle Foundation (AEF) is dedicated to protecting the majestic Bald Eagle, the USA's 
                            National Symbol, and its habitat by supporting and conducting eagle and environmental recovery 
                            and education programs. The AEF cares for a collection of about 80 non-releasable birds of 
                            prey daily (including 47 eagles), which play an important role in its education and breeding 
                            programs. Also, numerous orphaned and injured raptors are rescued, rehabilitated and released.`
            }),
    new Charity(
            {
                name: 'Big Cat Rescue',
                category: 'animals',
                location: 'Tampa, FL',
                url: 'https://bigcatrescue.org/',
                mission: `Our Mission is to provide the best home we can for the cats in our care, end abuse of big cats 
                            in captivity, and prevent extinction of big cats in the wild.`
            }),
    new Charity(
            {
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
            }),
    new Charity(
            {
                name: 'Loggerhead Marinelife Center',
                category: 'animals',
                location: 'Juno Beach, FL',
                url: 'https://marinelife.org/',
                mission: `Loggerhead Marinelife Center (LMC) is a non-profit sea turtle hospital that promotes 
                            conservation of ocean ecosystems with a focus on threatened and endangered sea turtles.`
            }),
    new Charity(
            {
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
            }),
    new Charity(
            {
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
            }),
    new Charity(
            {
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
            }),
    new Charity(
            {
                name: 'The Actors Fund',
                category: 'arts',
                location: 'New York, NY',
                url: `https://actorsfund.org/`,
                mission: `The Actors Fund is a national human services organization that fosters stability and resiliency, and provides a safety net for performing arts and entertainment professionals over their lifespan. Through offices in New York, Los Angeles and Chicago, The Fund serves everyone in film, theater, television, music, opera, radio and dance with programs including social services and emergency financial assistance, health care and insurance counseling, housing, and secondary employment and training services.`
            }),
    new Charity(
            {
                name: 'All Classical Portland',
                category: 'arts',
                location: 'Portland, OR',
                mission: `All Classical Portland is Portland, Oregon's classical radio station. Established in 1983, All Classical Portland's mission is to advance knowledge of and appreciation for classical music; to build and sustain culturally vibrant local and global communities around this art form; to reflect the spirit of the Pacific Northwest; and to foster integrity, quality, and innovation in all that we do.`,
                url: 'https://www.allclassical.org/'
            }),
    new Charity(
            {
                name: 'American Ballet Theatre',
                category: 'arts',
                location: 'New York, NY',
                mission: `American Ballet Theatre (ABT) is recognized as one of the great dance companies in the world. Few ballet companies equal ABT for its combination of size, scope and outreach. Recognized as a living national treasure since its founding in 1940, ABT annually tours the United States, performing for more than 600,000 people, and is the only major cultural institution to do so. It has also made more than 15 international tours to 42 countries as perhaps the most representative American ballet company and has been sponsored by the State Department of the United States on many of these engagements`,
                url: 'https://www.abt.org/'
            }),
    new Charity(
            {
                name: 'American Museum of Natural History',
                category: 'arts',
                location: 'New York, NY',
                mission: `The American Museum of Natural History (AMNH) is one of the world's preeminent scientific and cultural institutions. Since its founding in 1869, the Museum has advanced its global mission to discover, interpret and disseminate information about human cultures, the natural world and the universe through a wide-ranging program of scientific research, education and exhibition. The Museum is renowned for its exhibitions and scientific collections, which serve as a field guide to the entire planet and present a panorama of the world's cultures.`,
                url: 'https://www.amnh.org/'
            }),
    new Charity(
            {
                name: 'Center for Puppetry Arts',
                category: 'arts',
                location: 'Atlanta, GA',
                mission: `The Center for Puppetry Arts' mission is to inspire imagination, education, and community through the global art of puppetry. The Center's doors opened in September 1978, with Kermit the Frog and his creator Jim Henson cutting the ceremonial ribbon. Founded by Vincent Anthony, the Center filled a need for a place in the US where puppetry could be explored by both artists and audiences. Today, the Center has grown to be the largest non-profit organization in the nation dedicated solely to the art of puppetry.
                For more than forty years, the Center has introduced millions of visitors of all ages to the wonder and artistry of puppetry through three key programming areas: Performance, Museum, and Education. These program areas work in tandem to showcase puppetry in action, as a fine art, and as a gateway to imagination`,
                url: 'https://puppet.org/'
            }),
    new Charity(
            {
                name: 'Chicago Shakespeare Theatre',
                category: 'arts',
                location: 'Chicago, IL',
                mission: `Chicago Shakespeare Theater (CST) offers a broad spectrum of theatrical experiences year-round, engaging and entertaining audiences from all walks of life and from around the world. The plays of William Shakespeare form the core of our company's work and subscription series, featuring selections from Shakespeare's 38-play canon complemented by other dramatic works - from traditional classical theater to new classics that resonate with Shakespeare's timeless insights into the human condition. As Chicago Shakespeare strives to share our uniquely American brand of Shakespeare with the world, so do we also strive to bring to Chicago some of the best theater the world has to offer. To our World's Stage Series, we bring international theatrical productions to our city, presenting new cultural expressions and experiences for Chicago audiences and artists alike.`,
                url: 'https://www.chicagoshakes.com/'
            }),
    new Charity(
            {
                name: 'Community Radio for Northern Chicago',
                category: 'arts',
                location: 'Greeley, CO',
                mission: `Community Radio for Northern Colorado's mission is to cultivate the mind and spirit, to inform, inspire and entertain, and to strengthen the community. CRNC strives to meet its mission through its public radio stations, KUNC-FM, KRNC-FM, KENC-FM, KVNC-FM, KMPF-FM, and its network of translators`,
                url: 'https://www.kunc.org/'
            }),
    new Charity(
            {
                name: 'The Computer History Museum',
                category: 'arts',
                location: 'Mountain View, CA',
                mission: `The mission of the Computer History Museum is to preserve and present for posterity the artifacts and stories of the information age. As such, the Museum plays a unique role in the history of the computing revolution. Formally established in 1999, the Museum is dedicated to the preservation and celebration of computing history. We are home to one of the largest international collections of computing artifacts in the world, encompassing physical objects, ephemera, photographs, moving images, documents and software. The Museum's vision is to explore the computing revolution and its impact on the human experience.`,
                url: 'https://computerhistory.org/'
            }),
    new Charity(
            {
                name: 'Milwaukee Art Museum',
                category: 'arts',
                location: 'Milwaukee, WI',
                mission: `The Milwaukee Art Museum (MAM) collects and preserves art, presenting it to the community as a vital source of inspiration and education. Central to the Museum's mission is its role as a premier educational resource, with educational programs that are among the largest in the nation, involving classes, tours, and a full calendar of events for all ages. From its roots in Milwaukee's first art gallery in 1888, the Museum has grown today to be an icon for Milwaukee and a resource for the entire state. Four floors of over forty galleries of art are rotated regularly with works from antiquity to the present in the Museum's far-reaching collection. Included in the Collection are 15th- to 20th-century European and 17th- to 20th-century American paintings, sculpture, prints, drawings, decorative arts, photographs, and folk and self-taught art.`,
                url: 'https://mam.org/'
            }),
    new Charity(
            {
                name: 'Minnesota Public Radio | American Public Media',
                category: 'arts',
                location: 'St. Paul, MN',
                mission: `Founded in 1967, Minnesota Public Radio | American Public Media (MPR | APM) works to enrich the mind and nourish the spirit, thereby assisting our audiences to enhance their lives, expand perspectives and strengthen their communities. MPR is one of the nation's premier public radio stations producing programming for radio, Internet and face-to-face audiences. MPR provides three services - News and Information Service, Classical Music Service and The Current - operating a 45-station regional radio network and serving a regional population of five million people. APM is the nation's second-largest producer of public radio programs, reaching 18 million listeners each week through more than 900 radio stations nationwide. National programs include A Prairie Home Companion®, Marketplace®, The Splendid Table®, Performance Today®, Dinner Party Download®, Wits™, American RadioWorks® and others.`,
                url: 'https://www.mpr.org/'
            }),
    new Charity(
            {
                name: 'Advocates International',
                category: 'civil rights',
                location: 'Alexandria, VA',
                mission: `Advocates International (AI) is guided in its mission and methods by Christ's Good Samaritan parable. Working relationally, professionally, and spiritually with those in law and related professions, AI seeks to encourage and enable a global network of skilled advocates committed to religious liberty, human rights, conflict resolution, reconciliation, and professional ethics. AI's global network has been active since 1991 in promoting religious freedom and human rights, reconciliation and justice, ethics and the integration of faith and practice. The network links over 30,000 law professionals in 150 nations, including those in 30 former or current communist nations and in over 70 nations where religious freedom is under attack`,
                url: 'http://www.advocatesinternational.org/'
            }),  
    new Charity(
            {
                name: 'Advocates for Children of New York',
                category: 'civil rights',
                location: 'New York, NY',
                mission: `Advocates for Children (AFC) of New York promotes access to the best education New York can provide for all students, especially students of color and students from low-income backgrounds. We use uniquely integrated strategies to advance systemic reform, empower families and communities, and advocate for the educational rights of individual students. Our services include individual case advocacy, a helpline to assist parents and professionals, and workshops.`,
                url: 'https://www.advocatesforchildren.org/'
            }),
    new Charity(
            {
                name: 'American Civil Liberties Union Foundation',
                category: 'civil rights',
                location: 'New York, NY',
                mission: `The American Civil Liberties Union (ACLU) Foundation is the arm of the ACLU that conducts litigation and communication efforts. The Foundation provides legal presentation in cases involving issues of civil liberties and constitutional rights ranging from administrative hearings to trials and appeals. In addition, the Foundation educates the public as to civil liberties and constitutional rights by disseminating literature and other publications. The ACLU Foundation preserves and promotes civil rights and liberties as guaranteed by the United States Constitution.`,
                url: 'https://www.aclu.org/'
            }),
    new Charity(
            {
                name: 'American Immigration Council',
                category: 'civil rights',
                location: 'Washington, DC',
                mission: `The American Immigration Council is a non-partisan organization based in Washington D.C. Our legal, education, policy and exchange programs work to strengthen America by honoring our immigrant history and shaping how Americans think and act towards immigration now and in the future. The American Immigration Council exists to promote the prosperity and cultural richness of our diverse nation by educating citizens about the enduring contributions of America's immigrants, standing up for sensible and humane immigration policies that reflect American values, insisting that our immigration laws be enacted and implemented in a way that honors fundamental constitutional and human rights, working tirelessly to achieve justice and fairness for immigrants under the law.`,
                url: 'http://www.americanimmigrationcouncil.org/'
            }),
    new Charity(
            {
                name: 'American Sexual Health Association',
                category: 'civil rights',
                location: 'Research Triangle Park, NC',
                mission: `The American Sexual Health Association (ASHA) promotes the sexual health of individuals, families and communities by advocating sound policies and practices and educating the public, professionals and policy makers, in order to foster healthy sexual behaviors and relationships and prevent adverse health outcomes.
                            Founded in 1914, our services today provide us the opportunity to make a difference in the health, economic standards and quality of life of people and communities nationwide. ASHA specializes in communications outreach to the public, patients, press, providers, and policy makers by developing and delivering sensitive health information.`,
                url: 'http://www.ashasexualhealth.org/'
            }),
    new Charity(
            {
                name: 'Chicago Foundation for Women',
                category: 'civil rights',
                location: 'Chicago, IL',
                mission: `Chicago Foundation for Women (the "Foundation") invests in women and girls as catalysts, building strong communities for all. The Foundation is a not-for-profit organization dedicated to increasing resources and opportunities for women and girls in the Chicago region through grant making, leadership development, and public and grantee education. Since 1985, the Foundation has awarded nearly 4,000 grants totaling $30 million to organizations and programs that make life better for women and girls. The Foundation improves the lives of women and girls by investing in solutions to the most pressing challenges they face - economic security, violence and access to health care. Because of our broad experience and deep roots in the community, the Foundation remains at the forefront of anticipating new challenges facing women and girls and takes bold, but informed, philanthropic risks. The ultimate goal of all of the Foundation's work is to create lasting, positive change in the lives of women.`,
                url: 'https://www.cfw.org/'
            }),
    new Charity(
            {
                name: `Colorado Children's Campaign`,
                category: 'civil rights',
                location: 'Denver, CO',
                mission: `The Colorado Children's Campaign works to create hope and opportunity in Colorado, more than one million kids at a time. The Colorado Children's Campaign is a nonpartisan advocacy organization committed for 28 years to creating hope and opportunity for all of Colorado's more than 1.2 million kids. Using the most accurate, compelling data and research on child well-being and backed by an extensive, statewide network of dedicated child advocates, the Children's Campaign champions policies and programs that improve child health, early childhood experiences, and K-12 education, help lift children out of poverty and provide all of Colorado's children the opportunity to reach their full potential.`,
                url: 'https://www.coloradokids.org/'
            }),
    new Charity(
            {
                name: 'Electronic Frontier Foundation',
                category: 'civil rights',
                location: 'San Francisco, CA',
                mission: `When freedoms in the networked world come under attack, the Electronic Frontier Foundation (EFF) is the first line of defense. EFF broke new ground when it was founded in 1990 - well before the Internet was on most people's radar - and continues to confront cutting-edge issues defending free speech, privacy, innovation, and consumer rights today. From the beginning, EFF has championed the public interest in every critical battle affecting digital rights. EFF fights for freedom primarily in the courts, bringing and defending lawsuits even when that means taking on the U.S. government or large corporations. By mobilizing more than 50,000 concerned citizens through our Action Center, EFF beats back bad legislation. In addition to advising policymakers, EFF educates the press and public.`,
                url: 'https://www.eff.org/'
            }),
    new Charity(
            {
                name: 'Equal Justice Works',
                category: 'civil rights',
                location: 'Washington, DC',
                mission: `We create opportunities for lawyers to transform their passion for equal justice into a lifelong commitment to public service. Equal Justice Works is a 501(c) (3) nonprofit organization and is the nation's largest facilitator of opportunities in public interest law. Equal Justice Works brings together an extensive network of law students, lawyers, legal services organizations, and supporters to promote a lifelong commitment to public service and equal justice. The organization believes that a community of lawyers committed to public service can fulfill our nation's promise of equal justice for all. Following their Fellowships, more than 85% of Equal Justice Works Fellows remain in public service positions, continuing to pursue equal justice for underserved communities.`,
                url: 'https://www.equaljusticeworks.org/'
            }),
    new Charity(
            {
                name: 'American Humanist Association',
                category: 'civil rights',
                location: 'Washington, DC',
                mission: `The mission of the American Humanist Association is to advance humanism, an ethical and life-affirming philosophy free of belief in any gods and other supernatural forces. Advocating for equality for non-theists and a society guided by reason, empathy, and our growing knowledge of the world, the AHA promotes a worldview that encourages individuals to live informed and meaningful lives that aspire to the greater good.`,
                url: 'https://americanhumanist.org/'
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
            {
                name: 'Catholic Charities',
                category: 'commdev',
                location: 'San Francisco, CA',
                url: 'https://www.catholiccharitiessf.org/',
                mission: `Founded more than a century and a half ago to care for the orphans of the San 
                            Francisco earthquake, Catholic Charities is one of the largest, most 
                            comprehensive human services agencies in Northern California, reaching more 
                            than 32,000 individuals a year.`
            }),
    new Charity(
            {
                name: 'Corporation for Supportive Housing',
                category: 'commdev',
                location: 'New York, NY',
                url: 'https://www.csh.org/',
                mission: `CSH's mission is to advance housing solutions that deliver three powerful 
                            outcomes: 1) improved lives for the most vulnerable people 2) maximized public 
                            resources and 3) strong, healthy communities across the country.`
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
            {
                name: 'Foundation for Financial Planning',
                category: 'commdev',
                location: 'Washington, DC',
                url: 'https://ffpprobono.org/',
                mission: `The Foundation for Financial Planning works to help people take control of their 
                            financial lives by connecting the financial planning community with people in 
                            need. We achieve this by supporting pro bono advice and outreach activities.`
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
            {
                name: 'Alliance for the Great Lakes',
                category: 'environmental',
                location: 'Chicago, IL',
                mission: `The mission of the Alliance for the Great Lakes is to: "conserve and restore the world's largest freshwater resource using policy, education and local efforts, ensuring a healthy Great Lakes and clean water for generations of people and wildlife."`,
                url: 'https://greatlakes.org/'
            }),
    new Charity(
            {
                name: 'Amazon Conservation Association',
                category: 'environmental',
                location: 'Washington, DC',
                mission: `Founded in 1999, the Amazon Conservation Association (ACA) works to conserve the biological diversity of the Amazon. We work to protect biodiversity by studying ecosystems and developing innovative conservation tools to protect land in the region while supporting the livelihoods of local communities. We work by forging ties with governments, nonprofits and people who depend on the rainforests for their livelihood, with the goal of saving rare species and habitats and learning from the land. Scientific research guides our approach, which strives for concrete, measurable achievements. ACA has offices in Washington, DC.`,
                url: 'https://www.amazonconservation.org/'
            }),
    new Charity(
            {
                name: 'American Forest Foundation',
                category: 'environmental',
                location: 'Washington, DC',
                mission: `The American Forest Foundation works on-the-ground with families, teachers, and elected officials to promote stewardship and protect our nation's forest heritage. AFF is committed to creating a future where North American forests are sustained by the public that understand and values the social, economic, and environmental benefits they provide to our communities, our nation, and the world.`,
                url: 'https://www.forestfoundation.org/'
            }),
    new Charity(
            {
                name: 'American Rivers',
                category: 'environmental',
                location: 'Washington, DC',
                mission: `American Rivers protects wild rivers, restores damaged rivers, and conserves clean water for people and nature. Since 1973, American Rivers has protected and restored more than 150,000 miles of rivers through advocacy efforts, on-the-ground projects, and an annual America's Most Endangered Rivers® campaign. Headquartered in Washington, DC, American Rivers has offices across the country and more than 200,000 members, supporters, and volunteers. Through our river conservation work we are ensuring clean drinking water supplies, revitalizing fish and wildlife, improving recreation, and leaving a legacy of healthy rivers for future generations.`,
                url: 'https://www.americanrivers.org/'
            }),
    new Charity(
            {
                name: 'Appalachian Mountain Club',
                category: 'environmental',
                location: 'Boston, MA',
                mission: `Founded in 1876, the Appalachian Mountain Club promotes the protection, enjoyment, and understanding of the mountains, forests, waters, and trails of the Northeast region. We believe these resources have intrinsic worth and also provide recreational opportunities, spiritual renewal, and ecological and economic health for the region. Because successful conservation depends on active engagement with the outdoors, we encourage people to experience, learn about, and appreciate the natural world. Our 16,000 volunteers, 500 full time and seasonal staff, and 285,000 constituents are central to our mission. Our staff offers outdoor experiences and programs through our Northeast and Mid-Atlantic lodging destinations; our 12 volunteer-led chapters located from Maine to Washington, D.C. offer local outdoor activities and skills workshops. Staff and volunteers maintain over 1,800 miles of trails, support our conservation policy and research efforts, and get rural, urban and at-risk youth outdoors.`,
                url: 'https://www.outdoors.org/'
            }),
    new Charity(
            {
                name: 'The Climate Reality Project',
                category: 'environmental',
                location: 'Washington, DC',
                mission: `Our mission is to catalyze a global solution to the climate crisis by making urgent action a necessity across every level of society.`,
                url: 'https://climaterealityproject.org/'
            }),
    new Charity(
            {
                name: 'Desert Botanical Gardens',
                category: 'environmental',
                location: 'Phoenix, AZ',
                mission: `Nestled amid the red buttes of Papago Park, the Desert Botanical Garden hosts one of the world's finest collections of desert plants. Founded in 1939, this one-of-a-kind museum showcases 50 acres of beautiful outdoor exhibits. Home to 139 rare, threatened and endangered plant species from around the world, the Garden offers interesting and inspiring experiences to more than 300,000 visitors each year. The Garden's commitment to the community is to advance excellence in education, research, exhibition, and conservation of desert plants of the world with emphasis on the Southwestern United States. We will ensure that the Garden is always a compelling attraction that brings to life the many wonders of the desert.`,
                url: 'https://dbg.org/'
            }),
    new Charity(
            {
                name: 'Grand Canyon Trust',
                category: 'environmental',
                location: 'Flagstaff, AZ',
                mission: `Founded in 1985, the Grand Canyon Trust protects and restores the Colorado Plateau - its spectacular landscapes, flowing rivers, clean air, diversity of plants and animals, and areas of beauty and solitude. As a regional conservation organization we work for common sense, balanced solutions to significant problems affecting the region's natural resources. Our vision for the Colorado Plateau is: a region still characterized by vast open spaces with restored, healthy natural areas and habitat for all native plants and animals; a sustaining relationship between human communities and the natural environment; and people living and visiting here who are willing and enthusiastic stewards of the region's natural resources and beauty.`,
                url: 'https://www.grandcanyontrust.org/'
            }),
    new Charity(
            {
                name: 'Greater Yellowstone Coalition',
                category: 'environmental',
                location: 'Bozeman, MT',
                mission: `The Greater Yellowstone Coalition (GYC) was founded in 1983 to protect the lands, waters, and wildlife of the Greater Yellowstone Ecosystem. We emerged as a nationally known advocate for the idea that ecosystem level sustainability and science should guide the management of the region's public and private lands. This vast ecosystem includes twenty million acres of wild country that includes Yellowstone and Grand Teton national parks, parts of six national forests, three national wildlife refuges, and state and private lands in Wyoming, Idaho, and Montana. We work to protect the land from mining, oil and gas, and other such human developments; to ensure rare and imperiled wildlife are sustained, including grizzly bears, bison, wolves and cutthroat trout; and in the face of climate change, to implement adaptation strategies to give wildlife the best chance of survival in an uncertain future, such as by restoring degraded habitats and protecting climate sensitive habitats and species.`,
                url: 'http://greateryellowstone.org/'
            }),
    new Charity(
            {
                name: 'Rainforest Foundation US',
                category: 'environmental',
                location: 'Brooklyn, NY',
                mission: `The Rainforest Foundation helps protect the incredibly rich biological diversity of the rainforest and the cultural integrity of the peoples whose lives and livelihoods are inextricably linked to those forests. By working with indigenous communities to gain control of their ancestral lands we have helped protect 28 million acres of rainforest. We provide project-related grants and technical support to indigenous groups to secure rights to their lands, influence laws and policies to protect their resources and livelihoods, and build strong and sustainable community leadership.`,
                url: 'https://rainforestfoundation.org/'
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
            {
                name: 'The Family Radio Network, Inc.',
                category: 'religion',
                location: 'Appleton, WI',
                url: 'https://www.thefamily.net/',
                mission: `The Family is owned and operated by The Family Radio Network, Inc. a 
                            non-profit organization, founded in 1969. The Family's mission is 
                            to broadcast the hope of Jesus Christ to strengthen and encourage listeners.`
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            }),
    new Charity(
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
            })
    
];

let done = 0;

const charityCollection = new Charity()
charityCollection.remove({});

for (let i = 0; i < charities.length; i++) {
    charities[i].save(function(err, result) {
        done++;
        if (done === charities.length) {
            exit();
        }
    });
}

function exit() {
    console.log('all done');
    mongoose.disconnect();
}
        

    
    
     