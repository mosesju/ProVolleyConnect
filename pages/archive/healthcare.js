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
        headline: 'Healthcare for professional Volleyball',
        buttonText: '',
        buttonLink: '',
        subHeading: ''
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Pro Volleyball Healthcare</title>
                <meta name="description" content="Healthcare for professional Volleyball. How it works and what to know" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">If your parents are anything like ours, they&apos;ll want to know about your healthcare situation... you probably should to. Read on to put your mind at ease with what you&apos;ll be dealing with. A few of these might surprise you...</p>
                <h3>What is the health insurance situation?</h3>
                <p className="lead">Health insurance will be a clause in the Athlete&apos;s contract, which should clearly outline the situation. Commonly you will see a clause like; &quot;INSURANCE: all the costs will be covered by the Club;&quot;</p>
                <p className="lead">There are some edge cases where it depends on the professional status of the league. In most cases the athlete will be fully insured by the club.</p>
                <p className="lead">One of the top Agents we interviewed told us that he advises every player he has to keep a second insurance policy at home... particularly if you&apos;re on your parents insurance. This way you have a backup in case something happens and you want to have it done at home.</p>
                <h3>What happens in case of injury?</h3>
                <p className="lead">If the Athlete is hurt while playing, the club will be responsible for their recovery. If surgery is necessary the club will often give the athlete the option of whether to do it at home or in the country they are playing.</p>
                <p className="lead">Since the Athlete needs their body to do their job clubs tend to listen to Athletes throughout their experience</p>
                <h3>Will they have access to an Athletic Trainer?</h3>
                <p className="lead">Not to the same extent they are used to. In college Athlete&apos;s have daily access to a trainer directly within their facility. In their professional journey, this will not be the case unless they reach the top teams in the world.&nbsp;</p>
                <p className="lead">There will be a local physical therapist who opens their practice up to the team for a certain amount of hours per week. It will be up to the Athlete to take advantage of this opportunity.&nbsp;</p>
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