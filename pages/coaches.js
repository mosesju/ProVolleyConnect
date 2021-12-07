import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'

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
        <div>
            <NavBar />
            <Jumbotron props={ jumboProps } />
            <h1>Coaches</h1>
            <h2>Help your players become professional Volleyball Players</h2>
            <hr className={styles.dividerLine}></hr>

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
            <div>
                <h2>Coaches, ask us Anything and we will email you or write a post!</h2>
                <p>If you're interested in getting your team subscribed, email julian@1volley.com</p>
                <AskAQuestion />
            </div>
            <Footer />
        </div>
    )
}