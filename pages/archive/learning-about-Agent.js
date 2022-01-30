import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import ConvertKitSignUp from '../components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        headline: '',
        buttonText: '',
        buttonLink: '',
        subHeading: ''
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">Choosing your Agent is one of the most important decisions you will make in your professional Volleyball career. A good Agent early in your career will make the difference between finding contracts your whole career &amp; getting stuck in bad situations.&nbsp;</p>
                <p className="lead">Check out our <Link href="/agents/list">Agent List</Link> to see a list of Agents that are FIVB certified and have experience working with Americans.</p>
                <p className="lead">Here, we will talk about what you need to do to; find a good agent, keep in contact with them, and what the work relationship might look like.</p>
                <p className="lead">To choose the right agent, you need to ask the right questions and be able to judge your Agent&apos;s quality. To put it bluntly, is your agent going to screw you over? Once you know they&apos;re trustworthy and a you foresee a positive working relationship, it&apos;s time to find out if they can maximize your benefit so you can have the experience you&apos;re looking for.&nbsp;</p>
                <h2>Before you Sign with your Agent</h2>
                <p className="lead">Before you sign with your Agent you have to feel like you can trust the person you&apos;re to be working with. For NCAA athletes, this is the first real business decision you&apos;ll have to make. Your fist season is crucial in setting the tone for the rest of your volleyball career; so finding an Agent that can set you up for success is critical. To do this, you&apos;ll want to ask a few questions the first time you meet them; two in particular. You want to know about them as an Agent and you want to learn about how they see you as an Athlete.</p>
                <h3>About Them</h3>
                <ul>
                    <li className="lead"><strong>Is agent FIVB licensed</strong> <strong>and if so</strong> <strong>what</strong> <strong>is</strong> <strong>the</strong> <strong>license number?</strong> The FIVB is the governing body that helps Agents protect their players. When players aren&apos;t paid, Licensed Agents can go to the FIVB, open a case and help their players get their rightful earnings. Unlicensed Agents don&apos;t have this power.</li>
                    <li className="lead"><strong>What countries agent works and if he/she has any exclusive partners?</strong>&nbsp; Most agents have certain countries they specialize in and others they don&apos;t. For instance, an Italian based agent may have more connections in the Italian leagues than they do in the French or Belgian leagues. It&apos;s always important to know if your Agent has contacts in the leagues that fit your level of play.</li>
                    <li className="lead"><strong>Name of agents company and when did agent begin representing athletes?</strong>The more experienced an Agent is, the better quality contacts they tend to have. That being said, some of the newer, up and coming agents offer a better experience because of their grit and service. Starting with a newer agent brings the possibility of someone who works much more closely with you.</li>
                    <li className="lead"><strong>How many players has the agent represented? &nbsp;Percentage of female vs male athletes? Any coaches represented?</strong> It&apos;s good to know how focused your agent will be on you and their other athletes. When Agents have tons of Athletes they will often only worry about their top players or try to get as many players under contract as possible. You want to be sure you are going to get the best deal for <strong>you</strong>.&nbsp;</li>
                    <li className="lead"><strong>Who else do they represent that I can reach out to?</strong> The best resource for judging an agent are their other clients. If they can&apos;t give you a few people that you can reach out to, you might have found a red flag. See if you can reach out to other Athletes that are represented and see if you can get an inside look into their experience with the agency.</li>
                    <li className="lead"><strong>Any history of disciplinary/contractual claims brought by clients against agent?</strong>You want to be sure that they&apos;ve done right by their other clients. Always reach out to someone who has worked with them, or maybe even knows them in a personal capacity. You&apos;ve always heard that volleyball is a small community, so you&apos;d be surprised to see how many agents, players, and coaches run in the same circles.</li>
                    <li className="lead"><strong>How involved do you tend to be with your athletes?</strong> It&apos;s important to know what to expect as far as involvement goes. Some will want to speak every week, while others might only speak with you when they find you &nbsp; &nbsp; a new contract.</li>
                </ul>
                <h3>About You</h3>
                <ul>
                    <li className="lead"><strong>First, tell them what you&apos;re looking for in a team you join.</strong> Players go overseas for professional Volleyball for all sorts of reasons. Some Athletes want to have a cultural experience, while others are looking to compete at the highest levels. If you&apos;re a top tier player, but want to go cliff diving in Croatia for a year... tell your Agent. They may not sign you, but they might give you a connection that will help you follow your dream.</li>
                    <li className="lead"><strong>Why are you a great choice to represent me?</strong>Remember, this is the most important relationship you will build early in your volleyball career. They should be able to tell you why they&apos;re a great choice. Agency is a two-way street, remember. You want a great agent, but they also want a great client.</li>
                    <li className="lead"><strong>What kind of role might I play on a team I sign for?</strong> You want to make sure that they&apos;re perception of your role in a team aligns with your skill set. It&apos;s also an opportunity to see if they have spent time watching your game and figuring out where you might be able to fit into a professional team. <strong>Don&apos;t expect them to know everything about you and your style of play</strong>, just enough to tell that they&apos;ve watched you.</li>
                    <li className="lead"><strong>What league do you see me playing in this year?</strong> This could show you if they&apos;ve given some thought into what your level is and where they can use their contracts to get you. Remember anything said to answer this is speculation.</li>
                    <li className="lead"><strong>Explain your expectations of your level of play to the agent and ask them what they think.</strong> This will offer both of you an opportunity to discuss where you are vs. where you want to go. This is an opportunity to have a candid conversation about your expectations.</li>
                </ul>
                <p className="lead">These conversations are important <strong>before</strong> you sign your contract, because your career is in this person&apos;s hand. You must feel like you can trust your Agent and be sure they&apos;ll do right by you. Throughout your Volleyball career unpredictable situations <strong>will</strong> come up. They will be the person that gets you out of most of your sticky situations, especially with some of the finer details of your future contract.</p>
                <h2>Throughout the Season</h2>
                <p className="lead">Throughout your season you want to make sure to build your relationship with your agent to a level that is comfortable for both of you. Some Agents will want to review game footage with you after each match, other agents will only call you when they find you a contract. Do your best to figure out who you&apos;re dealing with and work with them to advance your game. It&apos;s good to keep your pulse on what they want from you and what parts of your game will get you a better contract the following season.&nbsp;</p>
                <h2>Contract Time</h2>
                <p className="lead">At some point in the middle of your season, your agent will come to you and start talking about your plans for the next year. This is the time to tell them whether or not you want to keep playing professionally, what kind of contract you are looking for, and what situation you want to be in. Here is where you should articulate what your ideal situation looks like and learn their thoughts. They will generally tell you where they are going to look and what else you need to do.</p>
                <p className="lead">A word of note, once the market opens, some agents can be very aggressive in terms of locking you down a desired contract. This can be stressful for some players if you are in the middle of a competitive season and already have to think of your next year of employment.</p>
                <h2>Wrap Up</h2>
                <p className="lead">Overall the most important thing you can do in your relationship with your Agent is to be transparent and honest. Good Agents will do their best to put you in the best situation they can, but it&apos;s your responsibility to figure out who the good ones are. This guide plus some judgement should give you the insight you need to find a great match!</p>
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