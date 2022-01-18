import styles from '../../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supbaseClient'
import { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import AskAQuestion from '../components/AskAQuestion'
import Head from 'next/head'

const AgentList = () => {
    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Learn all about Agents, here!',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'We aren\'t an agency. All Agents listed are FIVB certified.'
    }
    const [agents, setAgents] = useState([]);
    const router = useRouter();
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
            setAgents(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className={styles.main}>
            <Head>
                <title>Volleyhead</title>
                <meta name="description" content="The best Volleyball Agent list for NCAA Athletes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="d-flex justify-content-between">
                <h2 className="display-2">Agents</h2>
            </div>
            <div className="container">
                <ul>
                    {
                        agents.map((agent, i)=>{
                            return (
                                <li className="list-group-item" key={i} onClick={() => router.push(`/agents/${agent.id}`) }>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="lead">
                                            {agent.name}
                                        </div>
                                        <button className="btn btn-primary btn-sm">Learn More!</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
                
            <hr className="my-4" />
            <h1>
                Agents submit your information here.
            </h1>
            <AskAQuestion />
            <Footer />
        </div>
    )
}

export default dynamic(() => Promise.resolve(AgentList), {
    ssr:false
});