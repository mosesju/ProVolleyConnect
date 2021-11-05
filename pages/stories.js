import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import FeaturedStory from './components/FeaturedStory'

export default function Stories() {
    return (
        <main className={styles.main}>
            <NavBar />
            <h1>Stories</h1>
            <h2>What it's like to actually be a pro</h2>
            <hr className={styles.dividerLine}></hr>
            <FeaturedStory />

            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>Kyle Dagostino &rarr;</h2>
                    <p>Libero who played at Stanford and in Slovenia</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Cody Kessel &rarr;</h2>
                    <p>Outside from Princeton who plays with BR Volleys in Berlin, Germany</p>
                </a>

                <a
                    href="#"
                    className={styles.card}
                >
                    <h2>Jeff Jendryk &rarr;</h2>
                    <p>Middle from Loyola Chicago, who plays with BR Volleys in Berlin, Germany</p>
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
        </main>
    )
}