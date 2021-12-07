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
                    <div className="card">
                        <div className="card-body"> 
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <img 
                                src={johnSperaw} 
                                className="d-flex justify-content-center rounded-circle image-fluid"
                                height="150" width="150"
                            />
                            <div className="p-2 bd-highlight mb-auto">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <p className="display-6">John Speraw</p>
                                <h6> Head College &amp; USA Men&apos;s National Team Coach</h6>
                                <div className="lead">I&apos;m excited to have a trusted resource for professional volleyball information. Over the last few years I&apos;ve had athletes consistently come up to me and ask what it takes to go pro.  How do they find an agent? When does the process start? What are the NCAA rules? The list goes on and on. Finally I can point them to a resource that has all the information they need and the stories of the athletes who have made the process work. </div>
                            </div>
                            </div>
                        </div>            
                        </div>
                    </div>
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