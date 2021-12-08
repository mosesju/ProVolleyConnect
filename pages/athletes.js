import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import FeaturedStory from './components/FeaturedStory'
import AskAQuestion from './components/AskAQuestion'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'

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
        <main className={styles.main}>
            <div className='col-md-8'>
            <NavBar />
            <Jumbotron props={ jumboProps } />
            <div className="d-flex justify-content-center">
            <FeaturedStory />

            </div>
            <hr className={styles.dividerLine}></hr>
            <div className={styles.grid}>
                <a href="https://blog.volleyhead.com/getting-started-with-professional-volleyball/ " className={styles.card}>
                    <h2>Learn how to get your First Contract &rarr;</h2>
                    <p>Your first contract is the hardest to get... Discover the tricks and tips.</p>
                </a>

                <a href="https://blog.volleyhead.com/learn-to-be-a-pro" className={styles.card}>
                    <h2>The Secret Guide to Professional Volleyball &rarr;</h2>
                    <p>How does all these leagues work? Find out, here...</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/compliance"
                    className={styles.card}
                >
                    <h2>NCAA Compliance &rarr;</h2>
                    <p>That meeting you sleep through every year... except you should pay attention this time</p>
                </a>

                <a
                    href="https://blog.volleyhead.com/agents"
                    className={styles.card}
                >
                    <h2>All About Agents &rarr;</h2>
                    <p>
                        Discover the world of Agents, and learn how they can help you.
                    </p>
                </a>
            </div>
            <div>
                <h2>Athletes, ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
            </div>
            <Footer />
        </main>
    )
}