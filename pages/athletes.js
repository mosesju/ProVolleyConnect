import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import FeaturedStory from './components/FeaturedStory'
import AskAQuestion from './components/AskAQuestion'
import Footer from './components/Footer'

export default function Athletes() {
    return (
        <main className={styles.main}>
            <NavBar />
            <h1>Athletes</h1>
            <h2>Learn what to expect from your Professional Volleyball Experience</h2>
            <hr className={styles.dividerLine}></hr>
            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>Learn how to get your First Contract &rarr;</h2>
                    <p>Your first contract is the hardest to get... Discover the tricks and tips.</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>The Secret Guide to Professional Volleyball &rarr;</h2>
                    <p>How does all these leagues work? Find out, here...</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>NCAA Compliance &rarr;</h2>
                    <p>That meeting you sleep through every year... except you should pay attention this time</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>All About Agents &rarr;</h2>
                    <p>
                        Discover the world of Agents, and learn how they can help you.
                    </p>
                </a>
            </div>
            <FeaturedStory />
            <div>
                <h2>Athletes, ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
            <Footer />
        </main>
    )
}