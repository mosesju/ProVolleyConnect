import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import ConvertKitSignUp from '../components/ConvertKitSignUp'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'



export default function Agents() {
    const jumboProps = {
        headline: 'All About Agents',
        buttonText: '',
        buttonLink: '',
        subHeading: 'If you need help understanding an Agent\'s role'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>All about Agents</title>
                <meta name="description" content="How Professional Volleyball Agencies work, and what you need to look out for." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <h3></h3>
                <p className="lead">Disclaimer: We are not an Agency. We are a resource to help you make a more educated decision on your professional career.</p>
                <p className="lead">The most important and most misunderstood piece of the world of professional Volleyball is Agents. They&apos;re the bridge between athletes and organizations and often the most powerful actors in the game. While Agents are extremely sexy to talk about, very few people know what they actually do and how they work.</p>
                <p className="lead">We&apos;ve dedicated serious time interviewing Athletes, Agents &amp; Coaches to learn about what they know and looked to answer their most frequently asked questions. We will show you; Why Agents are Important, How to find an Agent, How Agents get paid, and more.&nbsp;</p>
                <h3>Why are Agents important?</h3>
                <p className="lead">Agents are the bridge between clubs &amp; Athletes. They have relationships on both sides and are deeply engaged with both parties to facilitate deals.&nbsp;</p>
                <p className="lead">Their main role is to help clubs find players that fit their profile. Agents are paid by clubs for their roles in facilitating deals and getting the right players at the right clubs.&nbsp;</p>
                <p className="lead">Your Agent is the most important contact you will have before you sign your contract. A great Agent will advocate for you and get your name in front of clubs that will advance your career. Other Agents might put you in a situation where they stand to benefit more than you. While Agents are extreemely helpful to the process of becoming a professional Volleyball player, it&apos;s crucial to remember that they&apos;re operating a business in a cut throat field.&nbsp;</p>
                <h3>How do I find an Agent?</h3>
                <p className="lead">Generally Agents will find you. This is considerably easier if you play on a highly visible team with other professional prospects, or if you are a statistical standout.&nbsp;</p>
                <p className="lead">The best way to find an agent is to play <strong>consistently</strong> at a high level throughout your season. Breakout games are great, but nothing is better than a reliable athlete with consistent performances.&nbsp;</p>
                <p className="lead">You can make yourself easier to discover by improving your visibility and getting out in front of Agents through social media. This might mean uploading videos to Facebook, Instagram and Tik Tok. Make sure to follow our compliance guidelines when reaching out to Agents about your future career.</p>
                <p className="lead">Agents are essentially recruiters that identify talented players and get them to clubs. This means that you are a recuit again! Remember what it was like to find a college to play for? Imagine that, but in a shorter time frame. But, once you find the right agent the process pretty much runs itself.</p>
                <p className="lead">If you are fortunate enought to have multiple agents reach out to you, feel free to speak to all of them. At the same time make sure you&apos;re transparent about the other agents you&apos;re dealing with. Some will ask you to sign an exclusive agreement, we recommend not signing until they put a team in front of you unles your Agent is very well regarded.</p>
                <h3>How does my Agent get paid?</h3>
                <p className="lead">Your Agent is generally paid a percentage of your contract, by the club that hires you. This can vary between 5 and 10%. There are outlier situations, where Agents tend to be paid by Athletes. More often than not the Agents payment is handled by the club, so you&apos;ll never know some of the details (when the payment occurs, etc...).</p>
                <p className="lead">Agents are paid by the club, which creates misaligned incentives. Their priority is to place an Athlete in a club and maintain their relationship with that club. Often times this means that they will propose a few players to a club at the same position in order to maximize their return. This is why it&apos;s important to understand the breakdown of your Agency and how many athletes they represent.</p>
                <h3>How involved should by Agent be?</h3>
                <p className="lead">This totally depends on your relationship with them. This is the most fluid part of the relationship with an Agent; some are worried about every game while others only speak to you when the market opens up. It&apos;s important that you are aware of this and decide what&apos;s important to you.</p>
                <p className="lead">Would you rather have an Agent that is highly engaged, a bit out of the loop or somewhere in between? Some players prefer getting a lot of feedback and involvement; they thrive with Agents that are involved. Others would rather be left alone and only have periodic conversations.&nbsp;</p>
                <p className="lead">This can be a contentious point, and is a matter of your preference. Make a decisions, but don&apos;t feel the need to be attached to one style over another!</p>
                <h3>What else do I need to know about Agents &amp; how they work?</h3>
                <p className="lead">Most Agencies will work with many athletes to make enough money to operate their business. When there are World Class players with your Agent, they will always be taken care of first because of their contract potential. This means that you might get less attention if there are a lot of heavy hitters on your Agencies roster. This is a true testament to what the professional job market looks like. Agents often look at this as a market, and are looking to lock deals down as quickly as possible. While this sounds brutal, there are merits to having a top Agent. It&apos;s up to you to decide to what extent you&apos;re ready to sacrifice a personal relationship for a name brand.</p>
                <p className="lead"><strong>** is the paragraph below right?**</strong></p>
                <p className="lead">Agencies and individual Agents are slightly different. Agencies are companies that employ multiple Agents to achieve manage more athletess. Individual Agents are on their own. There are advantages and disadvantages to both. An Agency will assign you to an Agent who will steward your whole experience with the Agency. Agencies generally offer more stability and pick up more athletes, but it&apos;s easier to get lost in the shuffle. An Individual Agent will tend to have less Athletes &amp; have better relationships with those Athletes. They also tend to be more selective with who they sign.</p>
                <p className="lead">A few years into your career, you might find that you&apos;ve outgrown your Agency. Maybe they aren&apos;t looking for contracts in the leagues you want to play in, or you&apos;re just at the end of your relationship with them. This is totally normal, and it&apos;s perfectly fine to look for a new Agent when this happens.</p>
                <p className="lead">It&apos;s also important to understand the power Agents have in the sport of Volleyball. The highest levels of Agents have influence in the hiring decisions that are made throughout the sport. A few Agents have signed several National Team level athletes and are able to use that weight to gain influence at the highest levels of the game. This won&apos;t affect most players, but is important to know.&nbsp;</p>
                <h3><br/></h3>
                <h3>What kinds of Agreements will I sign?</h3>
                <p className="lead">You&apos;ll sign an official FIVB agreement, that will attach you to your Agent for a specific time frame.&nbsp;</p>
                <p className="lead">Some Agents will lock Athletes into a multiple year agreement, which is great if the Agent is perfect. Otherwise this can be a red flag. Every situation is unique</p>
                <p className="lead">There are two main strategies that Athletes use. Often times they will not sign an agreement until the Agent has a contract for them. This offers the freedom of being able to speak to multiple Agents at once... but be warned some Agents won&apos;t work with those Athletes.&nbsp;</p>
                <h3>These people seem scary</h3>
                <p className="lead">Agents can be your best friends and guides on your journey through professional volleyball, but to get to that point in your journey you must be educated about the profession of an Agent and common pitfalls.&nbsp;</p>
                <p className="lead">Chances are that you&apos;ve never worked with someone like an Agent before, which can make it daunting; especially when you begin to talk about money. It&apos;s important to remember that they work for you, you hire and fire Agents as makes sense. That being sense, for them to do their best work you have to be engaged and put in the work required to help them.&nbsp;</p>
                <p className="lead">If you do the work up front, know what to expect, are responsive &amp; honest about what you want; you&apos;ll find that Agents will do their best to help you. Congratulations, you&apos;ve already taken a big step in learning to deal with Agents just by reading this.</p>
            </div>
            <ConvertKitSignUp />
            <div>
                <h3>
                    Ask us Anything about Agents!
                </h3>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}