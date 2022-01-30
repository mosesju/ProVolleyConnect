import NavBar from './components/NavBar';
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from './components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import ConvertKitSignUp from './components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        headline: 'Pro Volleyball Scores',
        buttonText: '',
        buttonLink: '',
        subHeading: 'Scores &amps; analysis from across the German Bundesliga, Italian SuperLega, Polish PlusLiga &amps; Champions League.'
    }
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Pro Volleyball Scores</title>
                <meta name="description" content="Scores &amps; analysis from across the German Bundesliga, Italian SuperLega, Polish PlusLiga & Champions League." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <h3></h3>
                <p className="lead"></p>
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