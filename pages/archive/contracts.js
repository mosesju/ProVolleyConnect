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
        headline: 'Contracts',
        buttonText: '',
        buttonLink: '',
        subHeading: 'How will your contract actually work'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Pro Volleyball Contracts</title>
                <meta name="description" content="Professional Volleyball contracts and how they work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">Your contract is the all important document that defines your relationship with your club. It&apos;s important to make sure your contract is solid and near bullet proof before you go. In the situation where something goes awry, you&apos;ll want to have a great contract to save you from some serious headaches. Here we tell you all you need to know about contracts.</p>
    <h3>Who writes the contracts?</h3>
    <p className="lead">Normally, the club writes a base contract, then adjusts a few clauses depending on input from either the athlete or their agency/representation. At the higher levels of play, clubs are more willing to cater to an athlete&apos;s requests if that means they have a better chance at hiring the player.</p>
    <h3>What do I need to watch out for?</h3>
    <p className="lead">When we came across this question we decided to reach out to one of our contributors; legendary Agent Andy Inveiss. Andy is one of the best Agent&apos;s in Volleyball and has been kind enough to help us get started. He said the following three stood out to him;</p>
    <p className="lead">&nbsp; &nbsp; 1. If a Club refuses to include termination of the contract and allowing a free transfer if they are late on any payments for more than 15 to 30 days. &nbsp; &nbsp;2. If a Club refuses to agree to Include the FIVB Dispute Resolution Process to resolve contractual disputes &nbsp; &nbsp;3. If a Club does not agree to guarantee a contract due to injury during practice or match.</p>
    <p className="lead">In the case they do not have these in your contract, speak to your agent and manager about these.</p>
    <h3>What clauses should I expect?</h3>
    <p className="lead">Salary information; which will tell you what you earn, what the installments will be and what your bonus structure looks like. Some clubs will include bonuses if certain milestones are reached. This section also clarifies the term of your contract, and how often you&apos;ll be paid.</p>
    <p className="lead">A statement like; &quot;At the end of the contract the Player will be free to transfer to another Club, without any payment to the Club for the release of the sports rights.&quot; This clause allows you to freely transfer at the end of your contract, and is often assumed by the club.</p>
    <p className="lead">Housing, which describes the apartment including a general roommate situation. This should indicate that you get a furnished apartment with an internet connection at the club&apos;s expense.</p>
    <p className="lead">Flight tickets, which describes how you would get to and from the club. Should be round trip from the home of the athlete to the club, with the return date being flexible. It is typical that the athlete pick a flight of their choosing when returning home.</p>
    <p className="lead">A statement about insurance, which should say something like; &quot;all the costs will be covered by the Club.&quot; This places all liability on them as your employer rather than you as the player.</p>
    <p className="lead">Clarification on international transfer fees, which should say something like; &quot;the Club undertakes to pay the annual International Transfer to the (Host Federation) and the due fees to CEV/FIVB and to athlete&apos;s Federation (Player&apos;s Federation).&quot;</p>
    <p className="lead">Agency fees, which should describe the amount paid to by the agent after the athlete passes their medical examination.&nbsp;</p>
    <h3>How long should I expect my contract to run?</h3>
    <p className="lead">At the beginning of your career you will generally have one season contract, meaning about 8-10 months. Some very high level players will sign 2 year deals, which is beneficial because it allows them to have some stability and work with the same coach/team for a longer time. This is rare, but not unheard of.</p>
            </div>
            <ConvertKitSignUp />
            <div>
                <h3>
                    Ask us Anything about Pro Volleyball!
                </h3>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}