import NavBar from './components/NavBar';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supbaseClient'
import { useState, useEffect } from 'react'
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/home.css'



export default function Agents() {
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
            console.log(data)
            setAgents(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className={ styles.main }>
            <NavBar />
            <div className="col-md-8" align="center">
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