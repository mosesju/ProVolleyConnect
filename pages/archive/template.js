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
        headline: '',
        buttonText: '',
        buttonLink: '',
        subHeading: ''
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