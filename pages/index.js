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
    subHeading: 'We have no conflicts of interest: Our team is composed of former pros and coaches; all we do all day, every day, is watch and analyze professional Volleyball, to answer your questions and tell the games stories.'
  }
  return (
    <div className={styles.main}>
      <Head>
        <title>Volleyhead</title>
        <meta name="description" content="The trusted news in professional Volleyball. Learn how to become a pro, read stories from pros and more..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="col-md-8" align="center">
        <NavBar />
        <Jumbotron props={ jumboProps }/>
        <div className={ styles.spacing }>
          <Testimonials /> 
        </div>
      </div>
      <ExploreCols />
      <GetFreeAccountButton />
      <FeaturedStory />
      <div className="col-md-8"> 
        <div className={`${styles.spacing}`}>
          <div className="d-flex justify-content-center">
            <h2>Volleyball <span className={styles.colorBlue}>trusts</span> Volleyhead</h2>
          </div>
          <p className={styles.description}>
            Professional Volleyball is often seen as untrustworthy, and unreliable. Agents are often painted
            as bad guys, because a few of them are terrible. Some clubs don&apos;t pay their players. Too many &quot;experts&quot; 
            base their opinions on feelings and stories rather than facts.
          </p>
          <span className={`${styles.title} d-flex justify-content-center`}>We got tired of it</span> 
          <p className={styles.description}>
          That&apos;s why we created ProGlobalVolleyball. We&apos;ve always been 100% independent and always will be. We 
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
          <p className="display-4" style={{textAlign:'center'}}>The Best Information about Professional Volleyball</p>

          </div>
          <div className="d-flex justify-content-center">
          <div className={styles.grid}>
            <a
              href="https://blog.volleyhead.com/bic"
              className={styles.card}
            >
              <h2>Get your $1 premium account &rarr;</h2>
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
              <a href="https://blog.volleyhead.com/tag/agents" className={styles.card}>
                <h2><strong>Learn all about Agents &rarr;</strong></h2>
                <p>The secrets to how Agencies work</p>
              </a>

              <a href="https://blog.volleyhead.com/tag/getting-started" className={styles.card}>
                <h2>Learn about Professional Volleyball &rarr;</h2>
                <p>Discover what it takes to become a pro</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
