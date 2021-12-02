import NavBar from './components/NavBar';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supbaseClient'
import { useState, useEffect } from 'react'
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from './components/Jumbotron';



export default function Agents() {
    const [agents, setAgents] = useState([]);
    const router = useRouter();
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Learn all about Agents, here!',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://volleyconnect.ghost.io/#/portal/signup',
        subHeading: 'We have no conflicts of interest and we aren\'t an agency. We are exclusively a source of information.'
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const { data, error } = await supabase
                .from('Agents')
                .select(`
                    name,
                    id
                `)
            return data;
        }
        fetchData().then((data)=>{
            console.log(data)
            setAgents(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className={ styles.main }>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8" align="center">
            <div className="jumbotron">
                <h1 className="display-4">Agents</h1>
                <p className="lead">The answers to your questions about Agents</p>
                <hr className="my-4" />
                <p>Read more articles about Agents and <Link href='/agents/list'>check out our list of Agents</Link></p>
                {/* <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p> */}
                <Link href="/agents/list">
                    <button className="btn btn-primary">See our list of Agents</button>
                </Link>
            </div>
            {/* https://volleyconnect.ghost.io/tag/agents/ */}
            
            <div>
                <h2>
                    Ask us Anything about Agents!
                </h2>
                <AskAQuestion />
            </div>
            </div>
           
            <Footer />
        </div>
        
    )
}