import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default function ThankYou() {
    return (
            <main className={`container ${styles.main}`}>
            
                <NavBar />
                <div className="col-md-8">
                    <h1 className={styles.title}>Thanks for submitting your question!</h1>
                    
                </div>
                <Footer />
            </main>
        
    )
}