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
        headline: 'How to get your First Contract',
        buttonText: '',
        buttonLink: '',
        subHeading: 'Learn the first few steps to becoming a pro Volleyball Player'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>How to get your First Contract</title>
                <meta name="description" content="Learn the first few steps to becoming a pro Volleyball Player" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <p className="lead">To get ready for your career in Volleyball, there are a few things you will want to do in college to get ready. Professional Volleyball is super competitive. All the best players from around the world want to find jobs playing their favorite game. If <strong>you</strong> get it right, you&apos;ll be in a great position to pursue your dream.</p>
                <h2>During your NCAA Season</h2>
                <p className="lead">Your junior and senior seasons are important, because they show your level of play. They give Agents &amp; Managers the best opportunity to see what kind of player you are and what role you can fill.&nbsp;</p>
                <p className="lead"><strong>Focus on your play and your health, when you nail those you are unstoppable.</strong> You have to play great season to make sure you get a great contract. Don&apos;t get ahead of yourself, and start thinking about where you want to play before your season is over. So go win some big games and a ring, then focus on your pro career. If you are a good, consistent and healthy, you will <strong>always</strong> be able to find a contract.</p>
                <p className="lead">You must speak to your NCAA Compliance officer. Read our guide on NCAA Compliance to learn more. Don&apos;t break any rules, because you and your team are the only ones that will feel the consequences.&nbsp;</p>
                <p className="lead">Now, come to certain terms that you want to play professional Volleyball. Many athletes continue to play, because it&apos;s easier than finding a job (don&apos;t play for that reason). Next, understand how professional Volleyball works and manage your expectations. It is a big commitment to leave home, but you will learn more about yourself than ever before! Once your season ends you will have to jump right into recruiting and the search for a contract, so it&apos;s best to be clear on the decision you are about to make.</p>
                <p className="lead">While you&apos;re having an amazing senior season, you may begin to get some Facebook friend requests or Instagram follows from Agents. This is good! You&apos;re attracting attention in the Volleyball world. Many of them may reach out, and ask to have a conversation. <strong>Make sure to stay NCAA Compliant.</strong></p>
                <p className="lead">You need to share your skills with the outside world, so coaches can identify how good you are. It&apos;s time for you to unleash your inner Spielberg and make a video! Your video is often the first time a manager might see you play. To learn all the tips and tricks of what to put into a video, read this.</p>
                <h2>Between NCAA &amp; Pro Season</h2>
                <p className="lead">Once your last match has ended, you&apos;ll be an emotional wreck. But, the professionals among us are now free of all NCAA regulations. Finally, sweet freedom. Time to find a contract.</p>
                <p className="lead">First, you should have an idea of what you want from your professional experience. Do you want to play at the highest levels of the game, or are you looking to pursue a continued education... or something in between. It&apos;s important that you choose what situation you want to put yourself in.</p>
                <p className="lead">Next, you should try to get an agent. It&apos;s entirely possible to get a contract without an Agent... but it&apos;s way easier to get a contract with an Agent than without one. By now, you&apos;ve had a few NCAA Compliant conversations with Agents throughout your final year. You&apos;ve built the appropriate relationships, and have a short list of who you&apos;d like to represent you. You should have a short list of who your agent could be, or are ready to reach out to several agents <strong>ASAP</strong>.&nbsp;</p>
                <p className="lead">Once your structured team practices end, you must continue training &amp; refining your skill set. Remember, a lot of other players are looking to make the breakthrough to play professionally. It&apos;s a privilege, not a given that you get a contract.</p>
                <p className="lead">Now your Agent will take over a lot of the leg work in getting you a contract, like contacting teams and sending your information to the appropriate coaches. Make sure you and your agent are working together to find the best team for you. Understand, that different clubs &amp; situations have different benefits and draw backs.</p>
                <p className="lead">Eventually, with a good agent &amp; the right level of play a situation might appear and you&apos;ll receive a contract. Take some time to read over it with your agent so you know exactly what you&apos;re signing up for. You may be able to have a conversation with your clubs manager, and a conversation with your new coach. See our Contracts Guide to understand exactly what to expect and a few red flags.</p>
                <p className="lead">Congratulations, you&apos;ve signed your first Professional Volleyball contract. You&apos;re a professional athlete! Now the real work begins...</p>
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