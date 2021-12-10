import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'
import AskAQuestion from './components/AskAQuestion'


export default function Home() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'About Us',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'We are a neutral group of former pros and coaches who are making professional Volleyball more accessible. We interview the top athletes to hear their stories and learn what being a pro is actually like'
    }
    const headProps = {
        title: 'About Volleyhead',
        metaContent: ''
    }
    const julianPicture = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/headshot.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9oZWFkc2hvdC5qcGciLCJpYXQiOjE2Mzg4ODMyOTksImV4cCI6MTk1NDI0MzI5OX0.RL8i_PD90zBVTQl6Xc6PS71w7s8o95ItmeZrTV5SY6E"
    const scottPicture = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Scott-headshot?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9TY290dC1oZWFkc2hvdCIsImlhdCI6MTYzODg4MzI2MywiZXhwIjoxOTU0MjQzMjYzfQ.K9sDd9gJyXoEIrPwK92bJ16tDiZ5TqhPZc3_wtBY0pw"

    return (
            <main className={`container ${styles.main}`}>
                <Head>
                    <title>Volleyhead</title>
                    <meta name="description" content="Your trusted source for Volleyball Information" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavBar />
                <Jumbotron props={ jumboProps } />
                <div className="col-md-8">
                    {/* <p className={styles.description}>What is Volleyhead?</p> */}
                    <h2 className={styles.subTitle}>Our Team</h2>
                    <div className="card">
                        <div className="card-body"> 
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <img 
                                src={julianPicture} 
                                className="d-flex justify-content-center rounded-circle image-fluid"
                                height="150" width="150"
                            />
                            <div className="p-2 bd-highlight mb-auto">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <p className="display-6">Julian Moses</p>
                                <h6>Co-Founder and Content Writer</h6>
                                {/* <div className="lead">I&apos;m excited to have a trusted resource for professional volleyball information. Over the last few years I&apos;ve had athletes consistently come up to me and ask what it takes to go pro.  How do they find an agent? When does the process start? What are the NCAA rules? The list goes on and on. Finally I can point them to a resource that has all the information they need and the stories of the athletes who have made the process work. </div> */}
                            </div>
                            </div>
                        </div>            
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body"> 
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <img 
                                src={scottPicture} 
                                className="d-flex justify-content-center rounded-circle image-fluid"
                                height="150" width="150"
                            />
                            <div className="p-2 bd-highlight mb-auto">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <p className="display-6">Scott Kevorken</p>
                                <h6>Co-Founder and Content Writer. Volunteer assistant: Pepperdine</h6>
                                {/* <div className="lead">I&apos;m excited to have a trusted resource for professional volleyball information. Over the last few years I&apos;ve had athletes consistently come up to me and ask what it takes to go pro.  How do they find an agent? When does the process start? What are the NCAA rules? The list goes on and on. Finally I can point them to a resource that has all the information they need and the stories of the athletes who have made the process work. </div> */}
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
                        , send us an email and we can figure something out.
                    </p>
                </div>
                <AskAQuestion />
                <Footer />
            </main>
        
    )
}