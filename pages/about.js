import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Head from 'next/head'
import Link from 'next/link'
import AskAQuestion from './components/AskAQuestion'
import ConvertKitSignUp from './components/ConvertKitSignUp'


export default function Home() {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'About Us',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Your trusted source for Volleyball news and stories'
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
                    <h2 className={styles.subTitle}>Our Mission</h2>
                        <p className="lead">You want to learn about professional Volleyball. Volleyhead, is the place for you. We are here to give you unbiased access and information for the professional game. We are a neutral group of former pros and coaches who are making professional Volleyball more accessible. We interview the top athletes to help them tell their stories</p>
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
                                <h6>Co-Founder and Content Writer. Former Outside Hitter, Lewis &amp; Ushuaia Ibiza Volei</h6>
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
                                <h6>Co-Founder and Content Writer. Volunteer assistant: Pepperdine. Former Middle Blocker, UC Irvine, SVG Lüneburg, &amp; VfB Friedrichshafen</h6>
                                {/* <div className="lead">I&apos;m excited to have a trusted resource for professional volleyball information. Over the last few years I&apos;ve had athletes consistently come up to me and ask what it takes to go pro.  How do they find an agent? When does the process start? What are the NCAA rules? The list goes on and on. Finally I can point them to a resource that has all the information they need and the stories of the athletes who have made the process work. </div> */}
                            </div>
                            </div>
                        </div>            
                        </div>
                    </div>
                    <hr className="my-4" />  
                    <h2 className={styles.subTitle}>Pricing</h2>   
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Free</h5>
                                <p className="card-text">Get the basics about professional Volleyball.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Premium</h5>
                                <p className="card-text">Get all articles, weekly emails, and access to our community for $99/year. </p>
                            </div>
                        </div>
                    </div>
                    <p><small className="text-muted">If you&apos;re a college or junior athlete, <a href="mailto:julian@1volley.com">email us for a free membershp.</a></small></p>
                    <Link href="/privacy-policy">
                        our privacy policy for those interested... you seem boring
                    </Link>
                </div>
                <ConvertKitSignUp />
                <AskAQuestion />
                <Footer />
            </main>
        
    )
}