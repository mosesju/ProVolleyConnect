import NavBar from './components/NavBar';
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from './components/Jumbotron';
import Head from 'next/head'
import ConvertKitSignUp from './components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Learn all about Agents, here!',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'We have no conflicts of interest and we aren\'t an agency. We are exclusively a source of information.'
    }
    const headProps = {
        title: 'About Volleyhead',
        metaContent: ''
    }

    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Volleyhead</title>
                <meta name="description" content="Your trusted source for Volleyball Information" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8" align="center">
            <div className="jumbotron">
                <h1 className="display-4">Agents</h1>
                <p className="lead">Agents are the mysterious figures that everyone wants to understand... but is also a little nervous about. Don&apos;t worry, we felt the same way getting started. Here we have information on how to interact with Agents, and what to expect</p>
                <hr className="my-4" />
                {/* <p>Read more articles about Agents and <Link href='/agents/list'>check out our list of Agents</Link></p> */}
                {/* <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p> */}
                <Link href="/agents/list">
                    <button className="btn btn-primary">See our list of Agents</button>
                </Link>
                {/* <h1 className="display-6">Agent List coming soon!</h1> */}

            </div>
            {/* https://volleyconnect.ghost.io/tag/agents/ */}
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Link href="/archive/all-about-agents/">
                        <div>
                        <h2>All About Agents &rarr;</h2>
                        <p>The breakdown on what Agents do, why they&apos;re important and more!</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/archive/learning-about-Agent">
                        <div>
                        <h2>Learning about your Agent &rarr;</h2>
                        <p>What should you ask your Agent before you get started?</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/archive/compliance">
                        <div>
                        <h2>NCAA Compliance &rarr;</h2>
                        <p>What you can and can&apos;t say around Agents</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/archive/contracts">
                        <div>
                        <h2>Contracts &rarr;</h2>
                        <p>What should my contract look like?</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
            </div>
            <ConvertKitSignUp />
            <div>
                <h2>
                    Ask us Anything about Agents!
                </h2>
                <AskAQuestion />
            </div>
            </div>
           
            <Footer />
        </div>
        
    )
}