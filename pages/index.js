import Head from 'next/head'
import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'
import ExploreCols from './components/ExploreCols'
import Jumbotron from './components/Jumbotron'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Link from 'next/link'
import FeaturedStory from './components/FeaturedStory'
import ConvertKitSignUp from './components/ConvertKitSignUp'

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
    <div className={`container ${styles.main}`}>
      <Head>
        <title>Volleyhead</title>
        <meta name="description" content="Your trusted news in professional Volleyball. Learn how to become a pro, read stories from pros and more..." />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Hotjar Tracking Code for https://www.volleyhead.com/ --> */}
      </Head>
      <NavBar />
      <Jumbotron props={ jumboProps }/>
      <div className="col-md-8" align="center">
      {/* <hr className="my-4" /> */}

        <div className={ styles.spacing }>
          <Testimonials /> 
        </div>
      </div>
      <hr className="my-4" />
      <ExploreCols />
      <div className="col-md-8">
        <hr className="my-4" />
        <h1 className="display-4 d-flex justify-content-center align-items-center">Get insider access to pro Volleyball</h1>
        <p className="lead d-flex justify-content-center align-items-center">You love Volleyball, and want to learn more about the pro game. Join to get insider access, scores, and stories from the people who make it happen.</p>
      
        <ConvertKitSignUp />
      </div>
      <hr className="my-4" />
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
            You&apos;re interested in pro Volleyball, but don&apos;t know how to start. You&apos;re in the right place.
            You might even be looking to go pro, or even just learn more about the professional game. You&apos;ve definitely heard the rumors... The nightmares
            and bad guys that give the sport a bad name.
          </p>
          <span className={`${styles.title} d-flex justify-content-center`}>We give you everything you need to have an amazing pro volleyball experience, without any bias.</span> 
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
            <div className={styles.card}>
              <h2>Join our Newsletter &rarr;</h2>
              <script async data-uid="dc9f9547ef" src="https://dogged-pioneer-9796.ck.page/dc9f9547ef/index.js"></script>
            </div>
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
