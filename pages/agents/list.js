import styles from '../../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'

const AgentList = () => {
    <div className={styles.main}>
        <NavBar />
        <ul>
            <h2 className="display-5">Agent Profiles</h2>
            {
                agents.map((agent, i)=>{
                    return (
                        <li className="list-group-item" key={i} onClick={() => router.push(`/agents/${agent.id}`) }>
                            {agent.name}
                        </li>
                    )
                })
            }
        </ul>
        <Footer />
    </div>
}

export default dynamic(() => Promise.resolve(AgentList), {
    ssr:false
});