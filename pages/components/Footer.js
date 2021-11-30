import styles from '../../styles/home.css'
import Image from 'next/image'
export default function Footer() {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className={styles.footer}>
            {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a> */}
            <p className="">{ year } &#169; ProGlobalVolleyball</p>
        </footer>
    )
}