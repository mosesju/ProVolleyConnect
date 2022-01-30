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
                <title>Parent FAQ</title>
                <meta name="description" content="Frequently asked Questions for the Parents of Pro Volleyball Players" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">There are a few basic questions that parents need to have answered before they really feel comfortable with their child&apos;s next step. We answer them, here.</p>
                <h3>Will they be home for the holidays?</h3>
                <p className="lead">No. The Christmas break is usually about 3-4 days off; with the USA being so far away, it is rare that a coach will allow a player to travel so far in the middle of the season.</p>
                <h3>What are the challenges they can expect to face?</h3>
                <p className="lead">Homesickness, Loneliness, and Boredom are the three biggest challenges athletes tend to face. There are more, but these are the big three that bother almost everyone.</p>
                <h3>What are the skills they are going to develop?</h3>
                <p className="lead">Now that your child will be living full-time in Europe for nearly 9 months, it&apos;s expected that your child will learn a few new skills. For starters, it is guaranteed that they will learn how to drive a manual car; any car supplied is almost always a stick-shift. Also, while in a foreign nation, it&apos;s always advised to give the native language a try. It creates a great connection to the locals/fans and they always appreciate the effort.&nbsp;</p>
                <p className="lead">They may also truly be on their own for the first time. You can&apos;t be at every game, or talk at the most convenient times. They can&apos;t come home to do their laundry or have you clean any dishes. It can be nerve-wracking for a parent, but it also builds great independence skills.</p>
                <h3>Will this interfere with their career after Volleyball?</h3>
                <p className="lead">Potentially in the short term. But every employer will have more questions about their experience playing volleyball in foreign countries than the classes they took in college.</p>
                <h3>Is it safe?</h3>
                <p className="lead">Yes.</p>
                <h3>Is it worth it?</h3>
                <p className="lead">Yes. No doubt. Every Athlete we spoke to agreed it is worth the challenge. &nbsp;They get to go after a dream of playing their favorite sport at the highest level and that is irreplaceable.&nbsp;</p>
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