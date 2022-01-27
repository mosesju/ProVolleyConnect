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
                <p className="lead">So you&apos;ve decided that the professional career is something for you. One hitch is that you are still in college and therefore possibly bound by rules from the NCAA in terms of what you can discuss in terms of your future. Here we want to talk about the steps that you can take when you are on the topic of talking with agents or clubs while you are still stateside and training with your college team.</p>
                <h3>What Do You Need to Worry About?</h3>
                <p className="lead">Like every other NCAA athlete, you have had a compliance meeting that touched on this subject, but at the time, you were more engaged in fighting for a national title than worrying about what rules you were breaking with agents and representation. There are some things that can severely impact your college program if you don&apos;t know the finer points when the time comes to becoming a professional athlete, such as hefty fines or the disqualification of accolades.</p>
                <p className="lead">Not everyone observes the NCAA rules as closely as they should throughout their time competing as an athlete, but when you get to the point that playing professionally is a viable option, it <strong>needs&nbsp;</strong>to be something you consider. These rules include things such as who can contact you, who can you contact, and what you can talk about.</p>
                <h3>Agents &amp; Amateurism</h3>
                <p className="lead">As we&apos;ve discussed in our piece about, the NCAA is focused on athlete&apos;s retaining amateur status. Meanwhile, Agents (the most important people to get your career started) want to have athletes commit ASAP to them. Sound like a recipe for success?</p>
                <p className="lead">Most of the NCAA violations come from conversations between Agents &amp; Athletes. By the book, Agents are only allowed to give you general information about themselves, and cannot solicit for an agreement. Shockingly, they tend to pressure you into an agreement.</p>
                <p className="lead">If you are contacted by an Agent before your last game as a collegiate Athlete, reach out to your compliance officer and forward them any messages you&apos;ve been sent. They will document the conversation and follow up with the agent for additional communications. Whatever you do, <strong>do not agree to representation before your last match.</strong></p>
                <p className="lead">Student Athletes are allowed to initiate contact with an Agent to ask questions, but the number one rule is that you <strong>cannot agree to any representation.</strong> For the third time <strong>DO NOT AGREE TO REPRESENTATION!&nbsp;</strong>Neither can your parents or that one uncle that thinks he&apos;s Don King.</p>
                <p className="lead">To manage the relationship you might say something like; &quot;Hi, I&apos;m in the middle of my season and focused on playing the best I can. I&apos;d love to continue this conversation after our season is over.&quot;</p>
                <h3>How Your Compliance Director Can Help You</h3>
                <p className="lead">Your compliance director is not typically the person you think of reaching out to when you are considering a career in professional sports. You probably haven&apos;t reached out to them at any other point in your career, and they probably are just the people who speak at you for an hour every year before your season starts.</p>
                <p className="lead">Your head coach will often have a close relationship with the compliance director. When the time comes for their athletes to consider going pro, coaches should communicate with their compliance director. This conversation should notify compliance who they might want to speak because of their ability to play professionally. Student Athletes should have a conversation with compliance before they start opening up conversations with Agents. Compliance should then do a quick refresher on the rules and make sure that athletes know who to reach out to when things begin to happen.</p>
                <h3>Name, Image, Likeness Age</h3>
                <p className="lead">Due to recent changes in NIL (as of July, 2021 in certain states) Student Athletes are allowed to capitalize on their Name Image and Likeness. Athletes will need to record all of their deals and report them to their compliance officer. Since NIL is still relatively unclear, we can give you some base guidelines on how to deal with it.&nbsp;</p>
                <p className="lead">If you are participating in NIL deals, make sure not to wear your universities marks for any advertisements. That will be a violation. If you hire an Agent for your NIL business, they may not speak to you about professional contracts.&nbsp;</p>
                <p className="lead">Talk to your compliance officer after you make a deal and run it by them <strong>before</strong> you sign anything. You&apos;ll want them to listen to the terms just to make sure that you won&apos;t be in violation of any other rules.</p>
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