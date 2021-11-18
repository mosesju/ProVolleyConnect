import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'

export default function Parents() {
    return (
        <main className={styles.main}>
            <NavBar />
            <h1>Parents</h1>
            <h2>Get your questions answered</h2>
            <hr className={styles.dividerLine}></hr>

            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>Healthcare &rarr;</h2>
                    <p>Learn the basics of the healthcare situation for professional Volleyball players</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Living Situation &rarr;</h2>
                    <p>What is the living situation like? Find out, here</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>Available Support &rarr;</h2>
                    <p>Mental Health? Physical Health? What support can we expect?</p>
                </a>

                <a
                    href="#"
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
        </main>
    )
}