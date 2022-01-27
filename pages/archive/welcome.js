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
        headline: 'Welcome to Volleyhead',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'What the &#^@ is a Volleyhead?'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Volleyhead</title>
                <meta name="description" content="Welcome to Volleyhead" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <h2>What the &#^@ is a Volleyhead?</h2>
            <p className="lead">Everyone has heard of a &quot;sneakerhead,&quot; a Volleyhead is no different. You are passionate about the sport of volleyball and want to stay up to date on the latest news, stats, and player stories.</p>
                <div className="d-flex justify-content-center">
                    <Image 
                        loader={()=> vhLogo} src={vhLogo} width={1080} height={1080}
                    />
                </div>

                <p className="lead">
                    We give you a resource to understand what your options are beyond playing in college. We&apos;re not an agency, but our we know how to get you started on the right foot. We (Scott Kevorken & Julian Moses) both played college volleyball, but had no clue how to take our game to the pro level. We had no in depth knowledge of teams, leagues, agents, timelines... or really anything! A few months ago, a mutual friend put us in contact after hearing our shared stories and we&apos;ve been building this resource ever since.
                </p>
                <p className="lead">Over the past few weeks, we&apos;ve been lucky to get some help from top names in the volleyball community. We can&apos;t wait to bring you quality content that streamlines this process for you.</p>
                <h3>What do I get</h3>
                <p className="lead">You deserve to be updated on professional Volleyball. You&apos;ll get free access to all of our stuff. 2 emails a week, and all the stuff we plan on doing in the future (it&apos;s a lot). Tuesday&apos;s you&apos;ll get information from across a few pro leagues, and Friday&apos;s you&apos;ll get an article, which might be an interview with a pro or something to help you navigate your pro career.</p>
                <p className="lead">We are also putting together a resource that will give you all the top Agent&apos;s information</p>
                <p className="lead">We&apos;re also building a website, volleyhead.com (you get early access), where you will have all of our information &amps; projects.</p>
                <h3>Why?</h3>
                <p className="lead">We&apos;re excited to share all the stuff we learned with you. Happy New Year, and good luck this season.</p>
            </div>
            <div>
                <h2>Get Volleyball news, scores and stories in your inbox twice a week!</h2>
                <script async data-uid="dc9f9547ef" src="https://dogged-pioneer-9796.ck.page/dc9f9547ef/index.js"></script>            </div>
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