import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
// import headshot from '../../public/headshot.jpg'

export default function FeaturedStory() {
    // Is this going to be loaded from supabase
    const athlete = {
        name: "Julian Moses",
        college: "Lewis",
        playsFor: "Ibiza",
        storySummary: "learned a bunch through pain",
        imageUrl: "",
        articleUrl: "https://www.google.com/"
    }
    const headshot = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/agents/headshot.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZ2VudHMvaGVhZHNob3QuanBnIiwiaWF0IjoxNjM3MTYxODUzLCJleHAiOjE5NTI1MjE4NTN9.oVqQMlVdHzL5KGeVGN1NJyr12UQkGyf7cZMwybA2a5E"
    return (
        <div className="col-md-6">
            <Link href={athlete.articleUrl} passHref={true}>
                <div>
                <h1>Our Featured Story</h1>
                <Card>
                    <img 
                        src={headshot} 
                        className="d-flex justify-content-center rounded-circle"
                    />
                    <Card.Title><h2>{athlete.name}</h2></Card.Title>
                <Card.Body><strong>Current Club: {athlete.playsFor}</strong><p>{athlete.storySummary}</p></Card.Body>
                </Card>
                </div>
            </Link>
        </div>
    )
}