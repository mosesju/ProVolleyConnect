import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'

export default function Learn() {
    // Where athletes will go to learn how to submit their stories
    return (
        <main className={styles.main}>
            {/* Embed airtable or something to collect names */}
            <h1>Want to tell your story?</h1>
            <p>Give us a quick summary of who you are and we will reach out to you ASAP</p>
            <AskAQuestion />
            <Footer />
        </main>
    )
}