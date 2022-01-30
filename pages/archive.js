import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import ConvertKitSignUp from './components/ConvertKitSignUp'

import styles from '../styles/Home.module.css'

import Head from 'next/head';
import { useRouter } from 'next/router'
import { Card, Row, Col, Button } from 'react-bootstrap';


// import dynamic from 'next/dynamic';


const Archives = () => {
    const router = useRouter();
    

    const jumboProps = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'Guides to Professional Volleyball',
        buttonText: 'Get your FREE membership!',
        buttonLink: 'https://blog.volleyhead.com/#/portal/signup',
        subHeading: 'Learn all the things you need about Pro Volleyball!'
    }
    const headProps = {
        title: 'About Volleyhead',
        metaContent: ''
    }

    const articles = [
        {
            title: 'Welcome to Volleyhead',
            author: 'Volleyhead',
            image: 'https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-300px/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLTMwMHB4L1ZvbGxleWhlYWQgTG9nby5wbmciLCJpYXQiOjE2NDMwMzIwODEsImV4cCI6MTk1ODM5MjA4MX0.-kX8qLQ-_SMv5Om0hK9SNOWJ-QbiwbCLTFErSHaUYCM',
            slug: 'welcome',
            description: 'What the *&^%$ is a Volleyhead?'
        
        },
        {
            title: 'So you want to Play Professional Volleyball',
            author: 'Cody Kessel',
            slug: 'so-you-want-to-play-professional-volleyball',
            description: 'Cody Kessel writes about becoming a pro, and what he wishes he would have known'
        },
        {
            title: 'The Secret Guide to Pro Volleyball',
            author: 'Volleyhead',
            image: 'https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-300px/KyleDag.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLTMwMHB4L0t5bGVEYWcuanBnIiwiaWF0IjoxNjQzMDMyMDYxLCJleHAiOjE5NTgzOTIwNjF9.69kR0nE4rs2duvSXWVQzmncnalSYx9KjCacIwuVP3KI',
            slug: 'secret-guide',
            description: 'Learn how professional Volleyball teams function'
        },
        {
            title: 'Living Situation Questions, Answered',
            author: 'Volleyhead',
            image: '',
            slug: 'living-situation',
            description: 'Learn about pro volleyball apartments and more!'
        },
        {
            title: 'Compliance',
            author: 'Volleyhead',
            image: '',
            slug: 'compliance',
            description: 'Get info on how to stay compliant while pursuing pro volleyball in college'
        },
        {
            title: 'All About Agents',
            author: '',
            image: '',
            slug: 'all-about-agents',
            description: 'How do you deal with Agents? Where do you find them and why are they important?'
        },
        {
            title: 'Career...',
            author: '',
            image: '',
            slug: 'career',
            description: 'Is professional Volleyball a viable career option?'
        },
        {
            title: 'FAQs for Athletes',
            author: 'Volleyhead',
            image: '',
            slug: 'athlete-faq',
            description: 'Learn about the commmon questions aspiring pros need answers to.'
        },
        {
            title: 'Get your Frist Contract',
            author: 'Volleyhead',
            slug:'get-first-contract',
            description: 'The tried and true path to getting your first contract (for most of us).'
        }

    ]

    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Articles</title>
                <meta name="description" content="Watch the best college players video" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            {/* <div className={`container ${styles.grid}`}> */}
            <div>
                <div>
                    <h3 className="d-flex justify-content-center">Going Pro is confusing</h3>
                    <p className="lead d-flex justify-content-center">Our guides can help you make sense of professional Volleyball, and figure out what going pro means.</p>
                </div>
                <Row xs={1} md={2} className="g-4">
                {
                    articles.map((article, i)=>{ console.log(i)
                        return(
                        <div key={ i }>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <p><small>{ article.author }</small></p>
                                    <Card.Text>{ article.description }</Card.Text>
                                    <Button variant="primary" onClick={() => router.push(`/archive/${ article.slug }`)}>Read More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        </div>
                        )
                        
                    })
                }
                </Row>
            </div>
            <ConvertKitSignUp />
            <Footer />
        </div>
    )
}


export default Archives
// export default dynamic(() => Promise.resolve(VideoList), {
//     ssr:false
// });