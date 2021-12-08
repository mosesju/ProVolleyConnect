import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
// import headshot from '../../public/headshot.jpg'

export default function FeaturedStory() {
    // Is this going to be loaded from supabase
    const athlete = {
        name: "Kyle Dagostino",
        college: "Stanford",
        playsFor: "Raison Loimu",
        storySummary: "Learned about the games politics, and how to advocate for himself... the hard way",
        imageUrl: "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/KyleDag?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9LeWxlRGFnIiwiaWF0IjoxNjM4OTYxMzE0LCJleHAiOjE5NTQzMjEzMTR9.DpO_VRds6qkLsO7BVEoXv3hg5RZmt86lENrbrX2ZZmg",
        articleUrl: "https://www.google.com/"
    }
    return (
        <div className="col-md-6">
            <Link href={athlete.articleUrl} passHref={true}>
                <div>
                <h1>Our Featured Story</h1>
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
                    </Card.Body>
                </Card>
                </div>
            </Link>
        </div>
    )
}