import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { supabase } from '../utils/supbaseClient'
import { useState, useEffect } from 'react'
import AskAQuestion from './components/AskAQuestion';


export default function Agents() {
    const [agents, setAgents] = useState([])
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
        <div className="container">
            <NavBar />

            <div className="jumbotron">
                <h1 className="display-4">Agents</h1>
                <p className="lead">The answers to your questions about Agents</p>
                <hr className="my-4" />
                <p>Read more articles about Agents and check out our list of Agents</p>
                {/* <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p> */}
            </div>
            {/* https://volleyconnect.ghost.io/tag/agents/ */}
            <ul>
                <h2 className="display-5">Agent Profiles</h2>
                {
                    agents.map((agent, i)=>{
                        return (
                            <Link href={`/agents/${agent.id}`}>
                                <li className="list-group-item" key={i}>
                                    {agent.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <div>
                <h2>
                    Ask us Anything about Agents!
                </h2>
                <AskAQuestion />
            </div>
        </div>
    )
}