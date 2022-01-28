import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
// import headshot from '../../public/headshot.jpg'

export default function FeaturedStory() {
    // Is this going to be loaded from supabase
    const athlete = {
        name: "Cody Kessel",
        college: "Princeton",
        playsFor: "BR Volleys",
        storySummary: "Learned about the games politics, and how to advocate for himself... the hard way",
        imageUrl: "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/cody usa attack.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9jb2R5IHVzYSBhdHRhY2suanBlZyIsImlhdCI6MTY0MzQwMTIwNCwiZXhwIjoxOTU4NzYxMjA0fQ.s4VeEuvt80TYlOPcuuT3-PC5jw43vwWEdUzDhchzpbc",
        articleUrl: "https://www.volleyhead.com/archive/so-you-want-to-play-professional-volleyball"
    }
    console.log(typeof(athlete.articleUrl))
    return (
        <div className="container">
            <Link href={ athlete.articleUrl } passHref={true}>
                <div>
                <h1>Read our Featured Pro Story and learn some of their lessons</h1>
                <Card>
                    <img 
                        src={ athlete.imageUrl } 
                        className="d-flex justify-content-center rounded-circle"
                    />
                    <Card.Title>
                        <div className="d-flex justify-content-center">
                            <h2>{athlete.name}</h2>
                        </div>
                    </Card.Title>
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <strong>Current Club: {athlete.playsFor}</strong>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="lead">{athlete.storySummary}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Read the story!</button>
                        </div>
                       
                    </Card.Body>
                </Card>
                </div>
            </Link>
        </div>
    )
}