import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'



export default function Agents() {
    const jumboProps = {
        headline: 'Living Situation Explained',
        buttonText: 'What is typical Pro Volleyball Living Situation',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Professional Volleyball Living Situation Explained</title>
                <meta name="description" content="Professional Volleyball Living Situation Explained" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
            <h2>What&apos;s it like to live like a pro Volleyball player?</h2>
            <p className="lead">Once an Athlete has decided on a team, they&apos;ll learn a little bit about their living situation. Some details will be mentioned in the contract and others won&apos;t. Here is our guide to the Athlete&apos;s new home.</p>
                {/* <div className="d-flex justify-content-center">
                    <Image 
                        loader={()=> vhLogo} src={vhLogo} width={1080} height={1080}
                    />
                </div> */}
            <h3>Where will the Athlete live?</h3>
            <p className="lead">
                The club will organize a living situation close to their facilities. This will normally be an apartment with a roommate who is also affiliated with the club. The roommate can be a teammate, or staff member. Typically, the living spaces or no more than a 10 minute drive from the training site.
            </p>
            <h3>What will the apartment look like? Do they have to furnish it?</h3>
            <p className="lead">They will have a furnished apartment that will generally include a shared bathroom and kitchen, and a private bedroom. Some clubs will provide each athlete with an individual apartment, but this is less common. Each apartment will have a washing machine, but in almost no cases will they have a dryer. To dry clothes they&apos;ll be given a drying rack to hang their clothes or a dry area somewhere in the house with clothes lines. For American players this is generally quite the surprise, but something that must be adapted to. </p>
            <p className="lead">Most all apartments have internet, but double check the contract to make sure it does, and if it doesn&apos;t ask the manager to make sure internet will be available. These days, internet is a must, even if just to keep your schedule.</p>
            <h3>How will the Athlete eat? Are meals prepared for them, or will they have to cook?</h3>
            <p className="lead">A massive part of the professional Volleyball experience is learning how to cook and nourish your body. Normally Athletes will have the necessary supplies to cook (pot, pan, bowls, plates, silverware, knives), but not much more. If they want something more involved they will likely have to go purchase it on their own.</p>
            <p className="lead">Some clubs have a deal with a local restaurant that lets the go a certain amount of times per week to go eat. Sometimes this can be twice a day, others it can be only before or after matches. Again, this is dependent upon the situation of the club.</p>
            <h3>What&apos;s the roommate situation?</h3>
            <p className="lead">Their contract will have a clause that outlines the housing situation the athlete will have. Generally they will live with one other roommate affiliated with the club. Once you start getting to higher levels of competition, the club will generally pay for each Athlete to have their own apartment.</p>
            <p className="lead">Some Athletes opt to get a nicer apartment on their own and split it with the club. If the athlete is willing to pay a little bit, the club might be willing to help them find a nicer apartment. This is a move that is generally reserved for more experienced players with bigger contracts.</p>
            <h3>What kind of things will Athletes need to buy?</h3>
            <p className="lead">The club apartment will have the bare bones essentials for the athletes. This means it is up to the athlete to outfit their living situation as they find necessary. It is not always guaranteed that your kitchen will have a microwave or toaster, for example. Sometimes you might even have to buy your own TV. This is always open for discussion with either the club manager or your point of contact within the club. </p>
            <h3>What will transportation look like?</h3>
            <p>Often teams will provide a car for the Athlete to use, or one to split with another teammate. Knowing how to drive a manual is a huge advantage before going abroad because most European nations will supply a stick-shift vehicle only. Many pro&apos;s have taught themselves to drive a stick just through playing overseas.
If this isn&apos;t the case, everything will be within walking distance and public transportation in major cities is very effective.</p>
            </div>
            <div>
                <h2>Get Volleyball news, scores and stories in your inbox twice a week!</h2>
                <script async data-uid="dc9f9547ef" src="https://dogged-pioneer-9796.ck.page/dc9f9547ef/index.js"></script>
            </div>
            <div>
                <h2>
                    Ask us Anything about Agents!
                </h2>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}