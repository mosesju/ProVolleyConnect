import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'
import Jumbotron from './components/Jumbotron'

export default function Learn() {
    // Where athletes will go to learn how to submit their stories
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Want to tell your story?',
        subHeading: 'We are always looking for pros to come and tell us about their experiences. Give us a quick summary of who you are and we will reach out to you ASAP'
    }
    return (
        <main className={`container ${styles.main}`}>
            {/* Embed airtable or something to collect names */}
            <NavBar />
            <Jumbotron props={ jumboProps } />
            <p>Give us a quick summary of who you are and we will reach out to you ASAP</p>
            <AskAQuestion />
            <Footer />
        </main>
    )
}