import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AskAQuestion from './components/AskAQuestion'

export default function Learn() {
    // This will be the page with the list of the most important pages
    return (
        <div>
            <h1>Learn about Professional Volleyball</h1>
            <div>
                <h2>Ask us Anything and we will email you or write a post!</h2>
                <AskAQuestion />
            </div>
            <Footer />
        </div>
    )
}