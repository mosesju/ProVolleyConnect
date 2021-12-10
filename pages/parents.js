import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'

export default function Parents() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Parents',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Wish you could better understand the journey your child has been talking about? We have the answers to your questions, here!'
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
            <h1>Parents</h1>
            <h2>Get your questions answered</h2>
            <hr className={styles.dividerLine}></hr>

            <div className={styles.grid}>
                <a href="https://blog.volleyhead.com/pro-volleyball-healthcare" className={styles.card}>
                    <h2>Healthcare &rarr;</h2>
                    <p>Learn the basics of the healthcare situation for professional Volleyball players</p>
                </a>

                <a href="https://blog.volleyhead.com/living-situation" className={styles.card}>
                    <h2>Living Situation &rarr;</h2>
                    <p>What is the living situation like? Find out, here</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/what-kind-of-support-do-i-get"
                    className={styles.card}
                >
                    <h2>Available Support &rarr;</h2>
                    <p>Health? Living? What support can we expect?</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/career"
                    className={styles.card}
                >
                    <h2>Career &rarr;</h2>
                    <p>
                        Is this a real career? Are jobs possible after Volleyball?
                    </p>
                </a>
            </div>
            <div>
                <h2>Parents, ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
            
            <Footer />
        </main>
    )
}