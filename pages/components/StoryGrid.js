import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/home.css'


export default function StoryGrid() {
    const stories = [
        {
            name: "ju",
            link: "https://docs.popsicle.finance/our-vision",
            description: "kind of weird",
            image: ""
        },
        {
            name: "kenny",
            link: "https://docs.popsicle.finance/our-vision",
            description: "dafad",
            image: ""
        }
    ]
    return (
        <div className={styles.grid}>
        {
            stories.map((story, i) => {
                console.log(story);
                <div className={styles.card}>
                    <Link href={story.link}>
                        <Image
                            src={story.image}
                        />
                        <h2>{story.name} &rarr;</h2>
                        <p>{story.description}</p>
                    </Link>
                </div>
            })
        }
            
            
        </div>
    )
}