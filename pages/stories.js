import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import FeaturedStory from './components/FeaturedStory'
import AskAQuestion from './components/AskAQuestion'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'
import Link from 'next/link'

export default function Stories() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Stories',
        buttonText: 'Check out the whole collection!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Read the stories from our favorite professional Volleyball players, current and former!'
    }
    return (
        <main className={styles.main}>
            <Head>
                <title>Volleyhead</title>
                <meta name="description" content="Your trusted source for Volleyball Information" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps } />
            <div className="col-md-8">
            <h1>Stories</h1>
            <h2>What it&apos;s like to actually be a pro</h2>
            <hr className={styles.dividerLine}></hr>
            <div className="d-flex justify-content-center">
                <div className="col-md-6">
                    <FeaturedStory />

                </div>
            </div>    
            <div className={styles.grid}>
                    <a href="#" className={styles.card}>
                        <h2>Kyle Dagostino &rarr;</h2>
                        <p>Libero who played at Stanford and is now in Finland</p>
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

                    <Link href="https://blog.volleyhead.com/#/portal/signup">
                        <button className="btn btn-primary">Join us for FREE to read more!</button>
                    </Link>
                </div>        
            <div>
                <h2>Submit a request for a story, or propose your own!</h2>
                <AskAQuestion />
            </div>
            </div>
            
            <Footer />
        </main>
    )
}