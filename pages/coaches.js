import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'

export default function Coaches() {
    return (
        <div>
            <NavBar />
            <h1>Coaches</h1>
            <h2>Help your players become professional Volleyball Players</h2>
            <hr className={styles.dividerLine}></hr>

            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>FAQs for Coaches &rarr;</h2>
                    <p>We asked coaches what they wanted to know, then did the research for them</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Skill Levels &rarr;</h2>
                    <p>Advise your players on what level they might be able to play at</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>Timelines &rarr;</h2>
                    <p>Feel like you never know when things should happen? See the general timeline, here</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>Get your pro account &rarr;</h2>
                    <p>
                        To celebrate our launch, we're offering a free pro account for college and professional players. Sign up later.
                    </p>
                </a>
            </div>
            <div>
                <h2>Coaches, ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
        </div>
    )
}