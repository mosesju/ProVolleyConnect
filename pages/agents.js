import NavBar from './components/NavBar';
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from './components/Jumbotron';
import Head from 'next/head'



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
        <div className={ styles.main }>
            <Head props={ headProps } />
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8" align="center">
            <div className="jumbotron">
                <h1 className="display-4">Agents</h1>
                <p className="lead">The answers to your questions about Agents</p>
                <hr className="my-4" />
                <p>Read more articles about Agents and <Link href='/agents/list'>check out our list of Agents</Link></p>
                {/* <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p> */}
                {/* <Link href="/agents/list">
                    <button className="btn btn-primary">See our list of Agents</button>
                </Link> */}
                <h1 className="display-6">Agent List coming soon!</h1>

            </div>
            {/* https://volleyconnect.ghost.io/tag/agents/ */}
            <div className={styles.grid}>
                <a href="https://blog.volleyhead.com/all-about-agents/" className={styles.card}>
                    <h2>All About Agents &rarr;</h2>
                    <p>The breakdown on what Agents do, why they're important and more!</p>
                </a>

                <a href="https://blog.volleyhead.com/learning-about-your-agent/" className={styles.card}>
                    <h2>Learning about your Agent &rarr;</h2>
                    <p>What should you ask your Agent before you get started?</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/compliance"
                    className={styles.card}
                >
                    <h2>NCAA Compliance &rarr;</h2>
                    <p>What you can and can't say around Agents</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/contracts/"
                    className={styles.card}
                >
                    <h2>Contracts &rarr;</h2>
                    <p>
                        Discover what a common contract looks like
                    </p>
                </a>
            </div>
            <div>
            </div>
            
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