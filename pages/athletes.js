import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import FeaturedStory from './components/FeaturedStory'
import AskAQuestion from './components/AskAQuestion'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'
import Link from 'next/link'
import ConvertKitSignUp from './components/ConvertKitSignUp'

export default function Athletes() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Athletes',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Learn what to expect from your Professional Volleyball Experience'
    }
    return (
        <main className={`container ${styles.main}`}>
            <Head>
                <title>Volleyhead</title>
                <meta name="description" content="Your trusted source for Volleyball Information" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps } />
            <div className='col-md-8'>
            <div className="d-flex justify-content-center">
            <FeaturedStory />

            </div>
            <hr className={styles.dividerLine}></hr>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Link href="/archive/get-first-contract">
                        <div>
                        <h2>Get your First Contract &rarr;</h2>
                        <p>Your first contract is the hardest to get... Discover the tricks and tips.</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/archive/secret-guide">
                        <div>
                        <h2>The Secret Guide to Professional Volleyball &rarr;</h2>
                        <p>How does all these leagues work? Find out, here...</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/archive/athlete-faq">
                        <div>
                        <h2>Athlete FAQs &rarr;</h2>
                        <p>All the questions you never thought to ask</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href="/agents">
                        <div>
                        <h2>All About Agents &rarr;</h2>
                        <p>Discover the world of Agents, see our list of and learn how they can help you.</p>
                        </div>
                    </Link>
                </div>
            </div>
            
            </div>
            <ConvertKitSignUp />
            <div>
                <h2>Athletes, ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
            <Footer />
        </main>
    )
}