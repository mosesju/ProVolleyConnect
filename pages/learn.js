import NavBar from './components/NavBar'
import styles from '../styles/Home.module.css'

export default function Learn() {
    // This will be the page with the list of the most important pages
    return (
        <div>
            <h1>Learn about Professional Volleyball</h1>
            <div>
                <h2>Ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
        </div>
    )
}