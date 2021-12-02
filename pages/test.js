import Jumbootron from './components/Jumbotron'

export default function Test() {
    const data = {
        image: "volleyball_equip.jpeg",
        imageAlt: "Banner image ball and hands",
        headline: 'world',
        buttonText: 'buttonText',
        subHeading: 'subheading'
    }
    return (
        <div>
            test functions
            if you found this page... go back to the normal website you beautiful genius
            <Jumbootron props = { data } />
        </div>
    )
}