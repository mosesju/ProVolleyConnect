import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'
import ConvertKitSignUp from './components/ConvertKitSignUp'

export default function Coaches() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Coaches',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Help your Athletes learn about professional Volleyball... the right way.'
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
            <h1 className={`display-4 ${styles.spacingTop}`}>Coaches</h1>
            <div className="col-md-8" align="center">
            <p className="lead">You want to help your guys get great professional contracts... any good coach would. You might not exactly know what to do and how to stay compliant during that process. Read on, to learn how we can help you do just that.</p>
            <hr className="my-4" />
            <h1>Articles for Coaches</h1>
            <div className={styles.grid}>
                <a href="https://blog.volleyhead.com/#/portal/signup" className={styles.card}>
                    <h2>FAQs for Coaches &rarr;</h2>
                    <p>Coming Soon</p>
                </a>

                <a href="https://blog.volleyhead.com/skill-levels" className={styles.card}>
                    <h2>Skill Levels &rarr;</h2>
                    <p>Advise your players on what level they might be able to play at</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/timelines"
                    className={styles.card}
                >
                    <h2>Timelines &rarr;</h2>
                    <p>Feel like you never know when things should happen? See the general timeline, here</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/#/portal/signup"
                    className={styles.card}
                >
                    <h2>Get your pro account &rarr;</h2>
                    <p>
                        To celebrate our launch, we&apos;re offering a free pro account for college and professional players. Sign up later.
                    </p>
                </a>
            </div>
            <ConvertKitSignUp />
            <div className={styles.spacingTop}>
                <h2>Ask us Anything and we will email you or write a post!</h2>
                <p>If you&apos;re interested in getting your team subscribed, email <a href="mailto:julian@1volley.com"><u>julian@1volley.com</u></a></p>
                <AskAQuestion />
            </div>
            </div>
            <Footer />
        </main>
    )
}