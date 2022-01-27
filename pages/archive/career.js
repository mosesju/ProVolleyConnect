import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import ConvertKitSignUp from '../components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        headline: 'Careers...',
        buttonText: '',
        buttonLink: '',
        subHeading: 'What\'s Pro Volleyball like as a career'
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
            <p className="lead">Everyone needs to find work after college. Some want to pursue a career in banking or consulting, others pursue careers as creatives. As athletes we are lucky to have the opportunity to go live in a foreign country and pursue a career doing what we want. That being said, it&apos;s important to remember that Volleyball will end eventually.</p>
            <p className="lead">We&apos;re going to talk about careers.&nbsp;</p>
            <h2>Is professional Volleyball a real career?</h2>
            <p className="lead">Yes, absolutely! While it is short lived compared to other career options, athletes often play at a high level into their mid to late thirties. The best players in the world tend to be older compared to other sports, because of much teams value consistency and experience.</p>
            <p className="lead">Some athletes reach a level where they make considerable amounts of money playing professionally and are able to completely retire when they are done playing. These are generally the top players in the world. Unfortunately, salary information is incredibly difficult to identify in professional volleyball. We can&apos;t promise you what you will make, but we are looking to figure this problem out.</p>
            <p className="lead">If you&apos;re interested in pursuing a career as a coach, professional Volleyball might be one of the best jobs you can choose. Many of the top NCAA coaches are former professionals. You&apos;ll be exposed to new styles of play and develop a refined idea of how the game should be played. It also offers pedigree if you want to land a job at a well established program; international experience is always a plus.</p>
            <p className="lead">If you&apos;re interested in staying in Volleyball for your career, playing professionally will do nothing but expand your network and open new doors for you.</p>
            <h2>What can I do to prepare myself for my career after Volleyball?</h2>
            <p className="lead">You can always continue studying! Many European Universities are virtually free when you declare residency in the country. They also offer many programs in English, which makes getting a degree while playing really easy. This option might require you to establish a longer term base in a certain city, as it&apos;s less common for European Universities to offer remote learning (quickly changing). You could also enroll yourself in a program back home and take classes online</p>
            <p className="lead">If you know what career path you want to follow, you can just start doing it as a freelancer or even get a part time job. Many Athletes find themselves looking for ways to fill their downtime, and sometimes a bit of project work can help keep them busy. It&apos;s entirely possible to . As a professional athlete, you&apos;ll always have plenty of downtime to use and it&apos;s up to you to determine how you use it.</p>
            <p className="lead">If you&apos;re entrepreneurial, professional Volleyball is a great opportunity to start your new project! It gives you time, health insurance and a steady income. There are a few athletes who do a great job building their business while playing overseas, by leveraging the internet. This is definitely for the adventurous, but can lead to all sorts of possibilities.</p>
            <h2>How will future employers look at a professional sports career?</h2>
            <p className="lead">Most employers will be fascinated by the experiences you&apos;ve had and the things you will have learned in your professional Volleyball journey. If you&apos;ve managed to keep up with some skill development and can tell a good story, you might find yourself at an advantage. Your experience in foreign countries, grit and teamwork are all great skills that most don&apos;t develop as well as professional athletes.</p>
            <p className="lead">As a professional Volleyball player you&apos;ll gain a mountain of real life experience, which other classic career paths don&apos;t offer. This gives you an ability to learn on the fly, deal with conflict, handle intense situations, and lead. While some employers don&apos;t understand that this type of life experience creates incredible employees; the ones who do will put a premium on those skills.</p>
            </div>
            <ConvertKitSignUp />
            <div>
                <h3>
                    Ask us Anything about Agents!
                </h3>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}