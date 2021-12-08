import Jumbootron from './components/Jumbotron'
import styles from '../styles/Home.module.css'

export default function Test() {
    const data = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Hellow World!',
        buttonText: 'Click Me!',
        subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
    return (
        <div className={ styles.main }>
            <div className="col-md-8">
                test functions
                if you found this page... go back to the normal website you beautiful genius
                <Jumbootron props = { data } />
            </div>
        </div>
    )
}