import NavBar from './components/NavBar';
import AskAQuestion from './components/AskAQuestion';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css'
import archiveStyles from '../styles/Archive.module.css'
import Link from 'next/link'
import Jumbotron from './components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import ConvertKitSignUp from './components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        headline: 'Pro Volleyball Scores',
        buttonText: '',
        buttonLink: '',
        subHeading: 'Scores and analysis from across the German Bundesliga, Italian SuperLega, Polish PlusLiga and Champions League.'
    }
    
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title>Pro Volleyball Scores</title>
                <meta name="description" content="Scores &amps; analysis from across the German Bundesliga, Italian SuperLega, Polish PlusLiga & Champions League." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
            <p className={`lead ${ archiveStyles.archiveLink }`}><Link href="https://www.instagram.com/reel/CZMjgIlptpo/?utm_medium=share_sheet" passHref={true}><div><strong>BEFORE YOU GO ON!</strong> Check out this IG video of our friend Jan Zimmerman, the setter from Padova &amp; the German National team, almost being murdered by Wilfredo Leon.</div></Link></p>
<p className="lead">Quite the week of volleyball! The German Bundesliga has accelerated their season due to Covid-19, moving straight into the playoff bracket. The Polish PlusLiga saw its next round of the main draw, including a thrilling 5 set match between TJ DeFalco and Taylor Averill&apos;s AZS Olszytn square off against Mica Ma&apos;a&apos;s GKS Katowice. In the Italian SuperLega, we saw a highly competitive week without a single 3-set sweep from any of the competitors. Great match between Milano and Perugia, with some really high level names playing... <strong>and of course we&apos;ve got video links for you.</strong></p>
<p className="lead"><br/></p>
<h1>PlusLiga</h1>
<p className="lead"><br/></p>
<table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tbody>
        <tr>
            <td align="center" >
                <figure ><img src="https://embed.filekitcdn.com/e/qw823LfedbZLE92VscAg4/t6RdgRqNbmoP6F721WXTDX/email" width="400" /></figure>
            </td>
        </tr>
    </tbody>
</table>
<p className="lead">The Polish League kept up its regular season play this week, seeing a dramatic 5-set match between AZS Olszytn and GKS Katowice (<a href="https://portal.volleymetrics.hudl.com/#/portal/match/268223" rel="noopener noreferrer"  target="_blank">VolleyMetrics</a>, <a href="https://www.youtube.com/watch?v=ZL8V8Twrtu0" rel="noopener noreferrer"  target="_blank">YouTube Highlights</a>). In the win for AZS Olszytn, TJ DeFalco scored a match high 25 points while Taylor Averill went a flawless 7 for 7 in attack. This result leaves both squads still in the middle of the Polish standings. Dustin Watten&apos;s LUK Lublin had a 3-0 sweep of Prjoekt Warszawa (Warsaw) in an upset (<a href="https://portal.volleymetrics.hudl.com/#/portal/match/268220" rel="noopener noreferrer"  target="_blank">VolleyMetrics</a>, <a href="https://www.youtube.com/watch?v=ZV_tTqvtJD4" rel="noopener noreferrer"  target="_blank">YouTube Highlights</a>), Watten passing a lights-out 50% perfect reception at the libero position. Erik Shoji and David Smith saw no action this week with Zaksa due to their current schedule of Champion&apos;s League.</p>
<p className="lead"><br/></p>
<table border="0" cellPadding="0" cellSpacing="0"  width="100%">
    <tbody>
        <tr>
            <td align="center" >
                <figure ><img src="https://embed.filekitcdn.com/e/qw823LfedbZLE92VscAg4/avAMVzxg136DSvcUw9Apzx/email" width="400" /></figure>
            </td>
        </tr>
    </tbody>
</table>
<p className="lead">Gdansk swept Stal Nysa 3-0, keeping them in last place of the league. Radom fell 3-0 to Malow Suwalki, each team keeping their position in the standings. We also had third ranked Zawiercie pull off a nail biter in 5 sets against low-ranking Cuprum Lubin.</p>
<h1 >SuperLega</h1>
<p className="lead"><br/></p>
<table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tbody>
        <tr>
            <td align="center" >
                <figure ><img src="https://embed.filekitcdn.com/e/qw823LfedbZLE92VscAg4/e3xFpsScmEvSyeUgyzqogv/email" width="400" /></figure>
            </td>
        </tr>
    </tbody>
</table>
<p className="lead">The SuperLega kept up it&apos;s high standard of play as per usual this week, though some matches were missed due to the Champion&apos;s League schedule. Padova came back against Taranto after coming back from down two, only to fall 12-15 in the 5th, maintaining their standing (<a href="https://portal.volleymetrics.hudl.com/#/portal/match/251920" rel="noopener noreferrer"  target="_blank">VolleyMetrics</a>, <a href="https://www.youtube.com/watch?v=ltKgOpC4V0k" rel="noopener noreferrer"  target="_blank">YouTube Highlights</a>). Thomas Jaeschke and his team, Allianz Milano, fell to Matt Anderson and the insanely talented, top-ranked Perugia in four sets. Both USA standouts had solid performances, with Jaeschke scoring 14 for Milano and Anderson scoring 20 for Perugia (<a href="https://portal.volleymetrics.hudl.com/#/portal/match/251915" rel="noopener noreferrer"  target="_blank">VolleyMetrics</a>, <a href="https://www.youtube.com/watch?v=9pXHiNfA4XM" rel="noopener noreferrer"  target="_blank">YouTube Highlights</a>). Trentino edged out Monza 3-1 with some stellar passing numbers. Though no featured American players, Vibo Valentia squared off against RCM Ravenna and took the match again 3-1. This was a great libero duel, with both teams passing the ball at a crazy high level.</p>
<h1 >Bundesliga</h1>
<p className="lead"><br/></p>
<table border="0" cellPadding="0" cellSpacing="0"  width="100%">
    <tbody>
        <tr>
            <td align="center" >
                <figure ><img src="https://embed.filekitcdn.com/e/qw823LfedbZLE92VscAg4/xtcxupCpvZWQD9Y54L5aX1/email" width="400" /></figure>
            </td>
        </tr>
    </tbody>
</table>
<p className="lead">The Bundesliga saw it&apos;s next round this week with some competitive, but fairly expected results. VfB Friedrichshafen bested Frankfurt United Volleys 3-1 in an absolute block-party of a match, with VfB registering a total of 15 stuff blocks! WWK Herrsching took down the Giesen Grizzlies in another 4-set match. Giesen won the attacking stats, but Herrsching&apos;s serving and passing propelled them to victory with 13 aces and 49% positive reception. SVG L&uuml;neburg, featuring Americans Jordan Ewert, Joe Worsley, and Dalton Solbrig took home a hard-fought 5-set win against KW Netzhoppers. Ewert scored a team-best 18 points with a 44% attack efficiency, meanwhile Worsley took home the gold MVP for the match. Lastly, we had two of the leagues top teams square off, Berlin Recycling Volleys vs SWD D&uuml;ren. Berlin took the match in a 4 set rollercoaster. Ben Patch had the hot hand for the match, hitting a blistering 76% in attack efficiency, 16 kills on 21 swings.</p>
            </div>
            <ConvertKitSignUp />
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