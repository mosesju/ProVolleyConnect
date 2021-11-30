import styles from '../styles/home.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default function Home() {
    return (
            <main className={styles.main}>
            
                <NavBar />
                <div className="col-md-8">
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.description}>what is pvc?</p>
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