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
        headline: '',
        buttonText: '',
        buttonLink: '',
        subHeading: ''
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>FAQ for Athletes</title>
                <meta name="description" content="All the questions you wish you had an answer to before going pro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">We&apos;ve compiled a list of articles we&apos;ve written as well as a few individual bullet points &nbsp;that we are frequently asked by athletes.&nbsp;</p>
                <h3>I know nothing about Agents, where do I even start?</h3>
                <p className="lead">Agents are the bridge between athletes and organizations and often the most powerful actors in the game. Their job is to help Clubs find players that fit their team, and act as a recruiter and help Volleyball Talent from across the globe find places to play. If you play the game at a high enough level, an Agent is the easiest way to pursue professional Volleyball.</p>
                <p className="lead">Read our articles on Agents, Conversations with Agents to learn more.</p>
                <h3>Can I find a contract without an Agent?</h3>
                <p className="lead">Yes, there are many ways to go about finding a contract without an Agent! It does mean you have to put in a little bit more foot work, but you can still do it.</p>
                <p className="lead">You can also pursue playing at a University in the UK, while completing graduate school. This is a good opportunity to get a Master&apos;s, and try living in Europe. It&apos;s an easier transition from the US to the UK vs. a transition to a country like Bulgaria.&nbsp;</p>
                <h3>What countries are right for my skill level?</h3>
                <p className="lead">This is a tough question, because you have some bias as to where you can fit in the scheme of various leagues. Your style of play might fit into certain leagues better than others, but this is all quite subjective. We wrote this article about how different levels of player fit into the professional landscape.</p>
                <h3>What is a good deal? How much can I expect to be paid?</h3>
                <p className="lead">Again this depends entirely on the level of your league and your own level of play. Normally players make between $500 and $3,000 per month in their first years. This doesn&apos;t include the top players, and includes an apartment and taxes.</p>
                <h3>I&apos;ve heard rumors of players getting screwed over, how do I avoid that?</h3>
                <p className="lead">First, is to have an airtight contract. Next, is to have an FIVB licensed Agent. If you don&apos;t have the latter, make sure to double down on the former. Check out our article on getting paid for more.</p>
                <h3>What if I have European citizenship? What does that change?</h3>
                <p className="lead">If you&apos;re a European citizen you have some advantages. You can register as a local in the town you are in, which is always helpful. If you aren&apos;t a National Team player you can also switch your federation to one with lower costs... if you have that nations passport.&nbsp;</p>
                <h3>When does the recruiting process start?</h3>
                <p className="lead">Professional Volleyball is a little different than a normal job. You&apos;ll find yourself moving quite frequently across borders, and switching jobs. The job market opens up in January or Febuary for the top teams and players.&nbsp;</p>
                <p className="lead">Since NCAA athlete&apos;s can&apos;t make any agreements until after their last match, most are at a disadvantage. You&apos;ll find that pro teams want people that are known entities, meaning it&apos;s easier to move up once you have a bit of a reputation.</p>
                <h3>Ok, so you&apos;re telling me I can get paid to play Volleyball... What&apos;s the catch?</h3>
                <p className="lead">There are plenty of challenges when it comes to playing professionally. We talk about a few of them throughout the site, and have a more in depth guide that includes recommendations from pros. The big ones are listed below</p>
                <ul>
                    <li>Loneliness</li>
                    <li>Boredom</li>
                    <li>Injury</li>
                </ul>
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