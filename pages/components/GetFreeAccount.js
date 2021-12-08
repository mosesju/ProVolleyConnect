import { Card } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

// import headshot from '../../public/headshot.jpg'

export default function GetFreeAccountButton() {
    // Is this going to be loaded from supabase
    return (
        <div class="jumbotron">
            <h1 class="display-4">Get your <strong>FREE</strong> account</h1>
            <p class="lead">Learn all about professional Volleyball, and get read the best athlete's stories</p>
            {/* <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
            <Link href="https://blog.volleyhead.com/#/portal/signup">
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Join for <strong>FREE!</strong></a>
                </p>
            </Link>
        </div>
    )
}