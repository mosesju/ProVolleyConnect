import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import headshot from '../../public/headshot.jpg'

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
    return (
        <div className="col-md-6">
            <Link href={athlete.articleUrl} passHref={true}>
                <div>
                <h1>Our Featured Story</h1>
                <Card>
                    <Image 
                        src={headshot} 
                        />
                    <Card.Title><h2>{athlete.name}</h2></Card.Title>
                <Card.Body><strong>Current Club: {athlete.playsFor}</strong><p>{athlete.storySummary}</p></Card.Body>
                </Card>
                </div>
            </Link>
        </div>
    )
}