import { Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

// import headshot from '../../public/headshot.jpg'

export default function GetFreeAccountButton() {
    // Is this going to be loaded from supabase
    return (
        <div className="jumbotron">
            <h1 className="display-4">Get your <strong>FREE</strong> account</h1>
            <p className="lead">Learn all about professional Volleyball, and get read the best athlete&apos;s stories</p>
            {/* <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
            <Link href="https://blog.volleyhead.com/#/portal/signup">
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Join for <strong>FREE!</strong></a>
                </p>
            </Link>
        </div>
    )
}