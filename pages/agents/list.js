import styles from '../../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AgentList() {
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