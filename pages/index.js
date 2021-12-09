import Head from 'next/head'
import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import ExploreCols from './components/ExploreCols'
import Jumbotron from './components/Jumbotron'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Link from 'next/link'
import FeaturedStory from './components/FeaturedStory'
import GetFreeAccountButton from './components/GetFreeAccount'

export default function Home() {
  const jumboProps = {
    image: "volleyball_equip.jpeg",
    imageAlt: "Banner image ball and hands",
    headline: 'Volleyball information you can Trust',
    buttonText: 'Get your FREE membership!',
    buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
    subHeading: 'Get unbiased stories, news and information about professional Volleyball.'
  }
  return (
    <div className={styles.main}>
      <Head>
        <title>Volleyhead</title>
        <meta name="description" content="Your trusted news in professional Volleyball. Learn how to become a pro, read stories from pros and more..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Jumbotron props={ jumboProps }/>
      <div className="col-md-8" align="center">
        
        <div className={ styles.spacing }>
          <Testimonials /> 
        </div>
      </div>
      <ExploreCols />
      <GetFreeAccountButton />
      <div className="d-flex justify-content-center col-md-8">
        {/* <h1>Read the pro's stories</h1> */}
        <FeaturedStory />
      </div>
      
      <div className="col-md-8"> 
        <div className={`${styles.spacing}`}>
          <div className="d-flex justify-content-center">
            <h2>Volleyball <span className={styles.colorBlue}>trusts</span> Volleyhead</h2>
          </div>
          <p className={styles.description}>
            You might not know a lot about professional Volleyball, but you probably think its untrustworthy, and unreliable. The bad guys
            probably have gotten most of the attention and you&apos;ve heard the nightmare stories like clubs refusing to pay their players. 
            While the sport does have its moments, there is far more to the experience than just nightmares.
          </p>
          <span className={`${styles.title} d-flex justify-content-center`}>We got tired of it</span> 
          <p className={styles.description}>
          That&apos;s why we created Volleyhead. We&apos;ve always been 100% independent and always will be. We 
          will fight to remain independent of outside influence and provide unbiased and trusted information.
          </p>
          <div className="d-flex justify-content-center">
          <Link href="/about">
              <button className="btn btn-primary">
              Read more about us and what makes us unique.
              </button>
          </Link>
          </div>
          
        </div>
        <hr style={{ marginBottom:'50px'}}></hr>
        <div>
          <div className="d-flex justify-content-center">
          <p className="display-4" style={{textAlign:'center'}}>The information you want about professional Volleyball</p>

          </div>
          <div className="d-flex justify-content-center">
          <div className={styles.grid}>
            <a
              href="https://blog.volleyhead.com/bic"
              className={styles.card}
            >
              <h2>Join our Launch Special &rarr;</h2>
              <p>
                  To celebrate our launch we are giving you a premium accounts for just <strong>$1!</strong>
              </p>
              </a>
              <a
                href="https://blog.volleyhead.com/tag/stories"
                className={styles.card}
              >
                <h2>Read your favorite Player&apos;s Stories &rarr;</h2>
                <p>Exclusive pieces, as told by the athletes</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
