import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import { Nav } from 'react-bootstrap';



export default function Agents() {
    const jumboProps = {
        headline: '',
        buttonText: '',
        buttonLink: '',
        subHeading: ''
    }
    const vhLogo = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/Volleyhead Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Wb2xsZXloZWFkIExvZ28ucG5nIiwiaWF0IjoxNjQzMjAwOTkyLCJleHAiOjE5NTg1NjA5OTJ9.4GZd-drAZlgE5ut7H9aiTTMWqHUjjtRVwgJZX4FceMU"
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <h3></h3>
                <p className="lead">Based on no data and a bunch of anecdotes, the Professional Volleyball job market is one of the most difficult to navigate markets on the planet. You move to a foreign country to pursue a dream, and don&apos;t really know what&apos;s going to happen when you get there. As an athlete you are at a disadvantage, without experience and some guidance the whole world of professional Volleyball will be impossible to make sense of. </p>
                <p className="lead">Lucky for you, we are here to clear up the misconceptions about professional Volleyball! Here are the links to some of the important articles we&apos;ve written about these topics.</p>
                <h3>Getting Started</h3>
                <p className="lead"></p>
                <h3>Getting Paid</h3>
                <p className="lead">
                Professional Volleyball isn&apos;t like the NBA or the NFL. A pro friend once put it to me as a lifestyle. You have to choose to forego a lot of other options and be a bit crazy to become a pro. Chances are that you&apos;ve probably already played your most organized Volleyball, unless you are going to be competing at the top of the top. If you end up in a more typical situation, you&apos;ll probably be getting paid between 15 and 25 thousand dollars per season (with an apartment and car included). 
                </p>
                <p className="lead">
                Your club may even wind up missing a few payments if it&apos;s in a sketchier league. However, if you make it to the top of the top you&apos;ll probably make considerably more than your friends that went into consulting. 
                </p>
                <p className="lead">The job is incredibly competitive... remember you&apos;re going against the top players in the world, who are looking to play for these big sums. </p>
                <h3>League Play</h3>
                <p className="lead">Most of your teams matches will be domestic league play. League play generally begins in October &amps; runs through early March. Based on the league, there are playoffs that begin after. Your contract will often have a performance bonus if your team does will in league.</p>
                <p className="lead">Your league will have between 12 and 20 teams competing for points. Wins in 3 or 4 sets are 3 points, losses are 0 and 5 set wins split the points 2 to the winner and 1 to the loser. The team with the most points at the end of the year wins the league and gets the top seed for the playoffs.</p>
                <p className="lead">Most European leagues play their matches on weekends and alternate between home and away matches.  To prepare for those matches, you&apos;ll have practice 5 days per week and strength training.</p>
                <h3>Domestic Cup</h3>
                <p className="lead">Most leagues also have a domestic cup. The Federation runs a separate Domestic Cup tournament. It is a classic tournament format and generally one of the more exciting events of the year. If your team qualifies for the tournament, you&apos;ll play the best teams in the nation on the biggest stage. Everyone shows out and loves the intense competition. For teams that don&apos;t qualify for European competition, this is the most exciting competition of the season.</p>
                <h3>European Competition</h3>
                <p className="lead">The pinnacle of both the Men&apos;s and Women&apos;s game is the CEV Champions League. it is where the best players on the best clubs in Europe compete. Once you&apos;ve made it to the CEV Champions League you&apos;ve made it to the top of professional Volleyball.</p>
                <p className="lead">The CEV Champions League is a competition run by the FIVB as an inter-European contest to identify the best teams. The best teams from leagues across Europe compete against each other. The competition begins in the winter and extends through the end of April to crown a European champion.</p>
                <p className="lead">Along with the Champions League, there is the CEV Cup and Challenge cups which are also European competitions. These contests are for the best teams that don&apos;t make Champions League, or lose early.</p>
                <p className="lead">To play in CEV competition is every elite player&apos;s goal, but to make it to one of these teams is difficult. Every player from top to bottom is a World Class Volleyball Player. These competitions are the highest level in the world.</p>
                <h3>Foreign Players</h3>
                <p className="lead">Foreign players are a critical part of every top tier team, and are essential to the success of a team. Teams buy foreign players to increase their strength. They&apos;re generally either high potential players that a team wants to help groom, or impact players that a team wants results from.</p>
                <p className="lead">Most leagues limit the amount of foreign players each team can have. This is the total number of players on the team or the number of players on the court. These rules keep the domestic players in the league and allow them to get court time. A players status as a foreigner depends on the federation a player is registered with. With Americans it will tend to be USA regardless of if the player has another passport.</p>
                <p className="lead">For example, the Italian league requires that each team has 3 Italians on the court at all times. They also only allow at most 2 players from each federation. The German Bundesliga has no restrictions, and the French leagues also have a lenient policy, requiring only one French player on the court at all times. The Russian league only allows 2 foreign players per team. You can see how varied the rules are from country to country.</p>
                <h3>International Transfer Fees</h3>
                <p className="lead">When you get your contract, your club will have to pay a fee to your federation to release you to that league. This is your transfer fee and is how your federation releases you to your new team for the season.</p>
                <p className="lead">The club pays the transfer fee and the amounts vary by federation. Some federations change the size of the payment based on the National Team experience a player has, while others have a flat rate for all players.</p>
                <h3>Summary</h3>
                <p className="lead">All teams compete in their domestic league, which is the source of most games. They are generally played within the country (barring some exceptions). The next level is the cup, which the top teams in the domestic league get to compete for. CEV is the elite competition, which crowns the best team in Europe. Each country has its own rules concerning foreign players; extremely permissive, like Germany or restrictive like Russia.</p>


            </div>
            <div>
                <h2>Get Volleyball news, scores and stories in your inbox twice a week!</h2>
                <script async data-uid="dc9f9547ef" src="https://dogged-pioneer-9796.ck.page/dc9f9547ef/index.js"></script>            </div>
            <div>
                <h3>
                    Ask us Anything about Agents!
                </h3>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}