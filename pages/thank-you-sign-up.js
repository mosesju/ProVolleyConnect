import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default function ThankYou() {
    return (
            <main className={`container ${styles.main}`}>
            
                <NavBar />
                <div className="col-md-8">
                    <h1 className={styles.title}>Thanks for joining Volleyhead</h1>
                    <h2>This is how excited we are!</h2>
                    <iframe src="https://giphy.com/embed/P8YWjInpYxwIC4bTjt" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/volleyballworld-serbia-srbija-nikola-pekovic-P8YWjInpYxwIC4bTjt"></a></p>                </div>
                <Footer />
            </main>
        
    )
}