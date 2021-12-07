import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'


export default function Home() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'About Us',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'We are a neutral group of former pros and coaches who want to make stories and information about pro Volleyball available to every Volleyball fan.'
    }
    const headProps = {
        title: 'About Volleyhead',
        metaContent: ''
    }
    return (
            <main className={styles.main}>
                <Head props={ headProps } />
                <NavBar />
                <Jumbotron props={ jumboProps } />
                <div className="col-md-8">
                    <p className={styles.description}>What is Volleyhead?</p>
                    <h2 className={styles.subTitle}>Our Team</h2>
                    <h2 className={styles.subTitle}>Pricing</h2>
                    <p className={styles.description}>
                        If you want to just read our on becoming a pro, join our always free plan.
                        You&apos;ll get all the basics 
                    </p>
                    <p className={styles.description}>
                        If you want to have access to our Discord community, weekly email, more stories and exclusive content
                        you&apos;ll want to opt into our paid membership. It&apos;s $99 per year. If you&apos;re a junior or college player
                        who can&apos;t afford our paid plan, send us an email and we can figure something out.
                    </p>
                </div>
                <Footer />
            </main>
        
    )
}