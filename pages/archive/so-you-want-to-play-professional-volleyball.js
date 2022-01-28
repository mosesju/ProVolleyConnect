import NavBar from '../components/NavBar';
import AskAQuestion from '../components/AskAQuestion';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css';
import ArchiveStyles from '../../styles/Archive.module.css';
import Link from 'next/link'
import Jumbotron from '../components/Jumbotron';
import Head from 'next/head'
import Image from 'next/image'
import ConvertKitSignUp from '../components/ConvertKitSignUp';



export default function Agents() {
    const jumboProps = {
        headline: 'So you want to Play Professional Volleyball',
        buttonText: '',
        buttonLink: '',
        subHeading: 'Cody Kessel on how to become a pro'
    }
    const codyPrinceton = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/princeton team.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9wcmluY2V0b24gdGVhbS5qcGVnIiwiaWF0IjoxNjQzMzk3MjY5LCJleHAiOjE5NTg3NTcyNjl9._XTuw8gYY0W3tpv_m2qQBIlVgz5JTlPUWdFdjZxmrh8";
    const codyUSA = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/cody usa attack.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9jb2R5IHVzYSBhdHRhY2suanBlZyIsImlhdCI6MTY0MzM5NzgyNSwiZXhwIjoxOTU4NzU3ODI1fQ.hohlryqD4qrpylWxqekn7xYOddcxOw-qAH_TidLPzGE";
    const codyBerlin = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/br volleys cele.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9iciB2b2xsZXlzIGNlbGUuanBlZyIsImlhdCI6MTY0MzM5NzgzOSwiZXhwIjoxOTU4NzU3ODM5fQ.rk7uKHOmrPMgg478_EEgRmn1RFeZVyLilM3v9ImkPdI"
    // className={`${ArchiveStyles.archiveLink}`}
    return (
        <div className={`container ${styles.main}`}>
            <Head>
                <title></title>
                <meta name="description" content="Cody Kessel talks about the process of becoming a pro, how to make it easier for yourself and what it's like on  a day to day basis." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Jumbotron props={ jumboProps }/>
            <div className="col-md-8">
                <h3>So you want to go play professional volleyball?</h3>
                <p className="lead">If you&rsquo;re an aspiring NCAA or Canadian USports athlete who wants to go play professionally overseas, you would be better served to think about how you came to play at the college you are at.&nbsp;</p>
                <p className="lead">If you were recruited- you know what kind of a process it was! Maybe years of relationship building, calls, texts, in-person visits, tournaments with coaches scouting you, sending video, looking at different options, and finally deciding. Additionally, you had and needed help because you wanted to find the best situation not only for your volleyball career but for your growth as a human being. Do the same here.</p>
                <ul>
                    <li>
                        <p className="lead">Inform yourself</p>
                        <ul>
                            <li>
                                <p className="lead">Have conversations with any current or ex-pro players you know or can get to know.&nbsp;</p>
                            </li>
                            <li>
                                <p className="lead">There are many humans who have done this or are doing this thing you want to do. Make it easy for them to help you.&nbsp;</p>
                            </li>
                            <li>
                                <p className="lead">Read the other articles like the ones at the end of this post&nbsp;</p>
                            </li>
                            <li>
                                <p className="lead">Scour sites like <a href="https://volleybox.net/" className={`${ArchiveStyles.archiveLink}`} rel="">Volleybox</a>, <a href="https://www.volleyhead.com/" className={`${ArchiveStyles.archiveLink}`} rel="">Volleyhead</a>, or <a href="https://worldofvolley.com/" className={`${ArchiveStyles.archiveLink}`} rel="">World of Volley</a>, to orient yourself (almost all pro leagues also have websites)</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className="lead">Recruit help you can trust (can be difficult with some agents or interested parties maybe not having your best interest at heart&ndash;more on that later) remember that you&rsquo;re entering the professional business world of sport</p>
                    </li>
                    <li>
                        <p className="lead">Keep honing your craft and your process&ndash; continue to actually improve as a professional, taking advantage of every training or playing opportunity you get.</p>
                    </li>
                </ul>
                <p className="lead">Many of the same things also apply to both processes:&nbsp;</p>
                <ul>
                    <li>
                        <p className="lead">How are your skills?&nbsp;</p>
                    </li>
                    <li>
                        <p className="lead">How physical are you? (this was an edge for me)</p>
                    </li>
                    <li>
                        <p className="lead">What position(s) do you play? Is there space for players of your position on that team?</p>
                    </li>
                    <li>
                        <p className="lead">What are your goals? etc.</p>
                    </li>
                </ul>
                <p className="lead">You should also talk to a BUNCH of different people about it who have been through it. Everyone only has their experiences they can draw from, so have conversations with as many people as you can about the process and take it all as information to serve you and your path. This article should also just be taken as additional information for you.&nbsp;</p>
                <p className="lead">While you may love volleyball so much you want to be a professional, unless you are a tremendously skilled libero or setter, your height/jump at this final level of play will require you to be a front row player able to touch over 11 feet ( 335 cm) for men and 10 feet (305 cm) for women, and you must be able to play the whole game. You must have a great serve (effective jumper or jump float), good blocking and hitting skills, be able to defend and receive, and at least set out of system balls.</p>
                <p className="lead">Some USA women face an additional challenge because their substitution rules in high school and college do not match international play. EVERYWHERE else in the world plays under FIVB rules&ndash;the same used in international play like the Olympics, where a team is only allowed 6 substitutions (3 in and out&ndash;and only once per player, per set.) Not 12 or 14. So even though defensive specialists and serving subs still exist, you likely need to know how to play the complete game. There is no &ldquo;front row&rdquo; outside hitter, middles must serve and play defense, etc. Because the level of NCAA women&rsquo;s play is quite high compared to other women&rsquo;s leagues around the world, top Division I talent will sometimes graduate early or leave school to join a professional team in December or January after the NCAA season ends. You can find a list of <a href="https://usavolleyball.org/story/updated-professional-club-transfer-list-for-2020-21/" className={`${ArchiveStyles.archiveLink}`} rel="">which clubs US players went to in 2020/21 here</a>. The updated list for 2021/22 might be out soon.&nbsp;</p>
                <p className="lead">If you&rsquo;re a guy finishing your senior season in April or May, you are already very late to the market for professional players that happens every year. Most professional seasons in Europe run September-April. Many teams begin filling their new rosters starting in January or February now. So this whole process just got a whole lot more difficult for your first season. I understand not wanting to feel rushed into a decision, that&rsquo;s never a good way to go, but there is some element of time pressure to understand.&nbsp;</p>
                <h3>For NCAA athletes&nbsp;</h3>
                <p className="lead">(not something Canadian USports athletes must worry about)</p>
                <p className="lead">There is &ldquo;debate&rdquo; as to when you can talk to foreign teams/agents- with many players choosing to not deal with it at all until their season ends (the end of senior year also being a special time socially for many players). I sat through many NCAA compliance meetings that had me scared to touch anything &ldquo;professional&rdquo; or &ldquo;agent&rdquo; with a ten-foot pole. So I didn&rsquo;t speak with agents or managers until after my season ended in May (which seems silly to me now). But you CAN speak with anyone, you always can. You can just NEVER enter into ANY kind of agreement or EVEN VERBALLY enter into an agreement that any kind of negotiations can be done on your behalf with any team, coach, or agent to be represented, to negotiate a contract or your professional skills.&nbsp;</p>
                <p className="lead"><a href="https://static.lsusports.net/assets/docs/ad/compliance/pdf/agents.pdf" className={`${ArchiveStyles.archiveLink}`} rel="">Here are the rules.</a></p>
                <p className="lead">Follow the rules and whatever your coach/school says&ndash;including the new Name, Image, Likeness guidelines&ndash; I just don&rsquo;t want you to be scared into any unnecessary or unfriendly silence. If you choose to wait just know that might put you a bit behind on information gathering, networking, and potentially on your first contract.&nbsp;</p>
                <p className="lead">You could, for example, speak with an agent or even go to dinner with them as long as you don&rsquo;t enter into ANY kind of agreement and you pay for your meal and transportation.</p>
                <p className="lead">Next thing I will say about agents is to pay attention to how well their network and skills match your goals as a player. I had success in college, but I was still a late bloomer and wanted to continue to develop my skills and be exposed to the best volleyball I could in hopes of playing for the National Team one day. These things take time. Chiara Castagnetti knew how to work with players like me to develop their careers out of college. Not all agents care to even work with these kinds of players. Some of the &ldquo;top&rdquo; agents do not care about you at all if you are not a national team starter. For sure they are great agents. But they might not be for you.&nbsp;</p>
                <p className="lead">Pay attention also to the agencies that have a lot of players. They may not have the time or the resources to truly attend to you.&nbsp;</p>
                <p className="lead">Also understand the work that goes into it. If you&rsquo;re starting out with a net salary of 10k (which could be a GREAT contract to start out with!), there is a lot of work, research, and networking across multiple countries over months or years of relationship building that earns these agents maybe $1000. Reaching out to all the teams, writing an airtight contract, checking that things stay professional and on track throughout the season, etc.&nbsp;</p>
                <p className="lead">Why do you even need an agent?! Technically you don&rsquo;t &ndash; clubs and players sometimes try to save on fees this way, but I would not recommend that- both for your current situation and for your future. Besides the connections, support, guidance, and mentorship they can provide, you are protected in ways you hopefully never have to deal with, and in general have a bit more power and security than you would have without one.&nbsp;</p>
                <p className="lead">There is an international governing body for the sport of volleyball, the FIVB, who monitors all these player transfers and the activity of the clubs as best as they can. The FIVB-licensed agents can represent the player in FIVB court if there are any sanctions that need to be taken against a club. An agent with some kind of legal background or experience is recommended.&nbsp;</p>
                <p className="lead">The FIVB also works with National Governing Bodies like USA Volleyball. Luckily, the fees that USA Volleyball takes to process a transfer are some of the lowest in the world (around $500 for non-national team players).&nbsp;</p>
                <p className="lead">If you&rsquo;re not a star player it can be difficult to find a &ldquo;good&rdquo; agent. Someone with passion who is working for pennies or doesn&rsquo;t take advantage of players. Some teams help pay their fees as part of the contract, sometimes the player pays the agent, when all is said and done maybe 5-10% of the contract goes to the agents.&nbsp;</p>
                <p className="lead">Another thing working against non-EU/foreign players is the foreigner limit. Countries like Finland and Germany have no limit on foreign players, but almost all others do. COVID times have made these scarce opportunities even harder to come by, as leagues and teams all across the world lose money or close.&nbsp;</p>
                <p className="lead">And yes, you&rsquo;re now in a competitive international market for players from all over the world who want the same job as you. Not easy!</p>
                <p className="lead">Navigating this scene for the first time, I learned I could trust my current agent Chiara Castagnetti who can be reached at <a href="mailto:chiarac7@hotmail.com" className={`${ArchiveStyles.archiveLink}`} rel="">chiarac7@hotmail.com</a>. For more on agents, and this process of what you can do to prep a volleyball CV- fellow journeyman <a href="https://www.dustywatten.com/blogs/news/so-you-want-to-go-pro-heres-what-you-need-to-know" className={`${ArchiveStyles.archiveLink}`} rel="">Dustin Watten has written it better than I can and you should read his write-up here</a>. Basically, since agents, coaches, etc. can&rsquo;t come watch you in person, you have to rely on video. Maybe a highlight video to catch their eye, then a couple full matches against good competition. Along with general information about you. These people know volleyball, they can see quality and just want to see how you move, how you play, how you interact, etc.&nbsp;</p>
                <div class="captioned-image-container">
                    <figure className="figure">
                        <Image loader={()=> codyPrinceton} src={codyPrinceton} width={1004} height={475} />
                        <figcaption class="figure-caption">Competing as a Princeton Tiger&nbsp;</figcaption>
                    </figure>
                </div>
                <h3><strong>Your Most Organized Volleyball May Be Behind You</strong></h3>
                <p className="lead">Another thing to understand is that if you&rsquo;ve been playing volleyball at a university or college you&rsquo;ve already been quite lucky! To be a student-athlete (with support from your school in all kinds of ways on and off the court) is a very unique situation when compared with how the rest of the world experiences school, sport, and volleyball. If you&rsquo;re leaving from an elite Division I school, especially as a woman, your first &ldquo;professional&rdquo; team might feel like a step down in terms of the club environment compared to your experience as an NCAA student-athlete (you might not have an athletic trainer present at every practice, you might not have a specific lifting coach, you might have one assistant coach, you might have a scout, etc.) &nbsp;</p>
                <p className="lead">Canada and the United States are basically the only countries with school-sponsored sports programs. Some other nations do have government-sponsored sports activities (like those provided by USA Volleyball and Volleyball Canada), but most of the time sports and school are split and have to be navigated on their own terms.&nbsp;</p>
                <p className="lead">Most foreign volleyball professionals you will play with started their careers at 17, maybe 18 after their equivalent of high school. Some continue school on the side when they can, some don&rsquo;t.</p>
                <p className="lead">This late-to-market aspect and joining the scene at around age 21 also contributes further to the need to &ldquo;establish yourself&rdquo; in the first season in the professional scene. Prove to yourself and to future teams that you can handle the lifestyle, that you still enjoy it, and you can still compete and perform at a high level when volleyball becomes your job. (I don&rsquo;t have stats but I would say 60% of players only play one or two seasons before going back home). &nbsp;</p>
                <p className="lead">My personal (very) simplified path was:&nbsp;</p>
                <ul>
                    <li>
                        <p className="lead">Played well at Princeton (2nd Team All-America)</p>
                    </li>
                    <li>
                        <p className="lead">Leaned on my network and also was helped (saved) by my now agent, Chiara Castagnetti who helped me navigate the professional scene (at first I physically signed a contract as an OH4 in Italy, celebrated personally and with family and friends, but there were &ldquo;complications&rdquo;&hellip;) eventually I landed my first contract as an opposite in Switzerland at Volley Sch&ouml;nenwerd.</p>
                    </li>
                    <li>
                        <p className="lead">Played mediocre, got injured, missed most of the season but was able to stay and receive medical care in Switzerland and <a href="https://codykessel.wordpress.com/2016/03/" className={`${ArchiveStyles.archiveLink}`} rel="">acted as a data volley assistant coach until the end of the season.</a></p>
                    </li>
                    <li>
                        <p className="lead">Coach Stefan H&uuml;bner and L&uuml;neburg took a chance on this &ldquo;<a href="https://www.landeszeitung.de/lzsport/volleyball/62243-ein-rohdiamant-fuer-die-svg/" className={`${ArchiveStyles.archiveLink}`} rel="">Rohdiamant</a>&rdquo; (Rough Diamond) at outside hitter for the season 2016/17</p>
                    </li>
                    <li>
                        <p className="lead">Three years loving life and volleyball in L&uuml;neburg at a great club</p>
                    </li>
                    <li>
                        <p className="lead">Now going on season three of loving life and volleyball in Berlin at one of the most professional clubs in the world: <a href="https://www.berlin-recycling-volleys.de/" className={`${ArchiveStyles.archiveLink}`} rel="">Berlin Recycling Volleys</a></p>
                    </li>
                </ul>
                <p className="lead">(you can follow the professional path of players&ndash;and transfer news/rumors on <a href="https://volleybox.net/transfers/2021-22" className={`${ArchiveStyles.archiveLink}`} rel="">VolleyBox</a>. An unofficial LinkedIn for the international volleyball world. <a href="https://volleybox.net/cody-kessel-p2979/clubs" className={`${ArchiveStyles.archiveLink}`} rel="">Here&rsquo;s my profile.</a>)&nbsp;</p>
                <p className="lead">I have also contributed to the National Team Gym and competed on a number of USA teams, a highlight was earning best attacker honors in my hometown of Colorado Springs at the NORCECA Champions Cup in 2019.</p>
                <div class="captioned-image-container">
                    <figure>
                        <Image loader={()=> codyUSA} src={codyUSA} width={3000} height={2000}/>
                        <figcaption class="figure-caption">Battling a strong Cuban team in front of my home crowd&nbsp;</figcaption>
                    </figure>
                </div>
                <p className="lead">Other miscellaneous considerations.&nbsp;</p>
                <ul>
                    <li>
                        <p className="lead">Maybe you&rsquo;ve played 4 or 5 month seasons before. What about 8 or 9 months?&nbsp;</p>
                    </li>
                    <li>
                        <p className="lead">Can you cook? (I had to &ldquo;learn&rdquo; again after 4 years of mostly dining hall meals)</p>
                    </li>
                    <li>
                        <p className="lead">Can you drive a manual car? Maybe the club will have an automatic available, maybe.</p>
                        <ul>
                            <li>
                                <p className="lead">That&rsquo;s also if you&rsquo;re not relying on public transportation. You may also have to share a car or apartment with other players.&nbsp;</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className="lead">You will miss the Fall, Thanksgiving, Christmas holidays, and spring with friends and families. You will miss weddings, births, and countless moments with loved ones.&nbsp;</p>
                    </li>
                </ul>
                <p className="lead">What will the living situation be like? Remember that if you&rsquo;re not on our National Team and there are no agents blowing up your phone, you&rsquo;re probably headed somewhere to work a difficult and demanding job for maybe a little above minimum wage.&nbsp;</p>
                <p className="lead">For many who earn a college degree, eventually this tradeoff of time and energy does not make sense or become worth it quickly enough.&nbsp;</p>
                <h3><strong>More on what I wish I would have known:&nbsp;</strong></h3>
                <p className="lead">I was prepared. I knew it would be a struggle. I knew from hearing stories and reading about the scene for years some of the challenges to expect. Going to a place I had never been to, away from my friends and relations, to go all in on myself and take a risk to play the sport I love as a professional.&nbsp;</p>
                <p className="lead">Luckily for me, I love playing volleyball.&nbsp;</p>
                <p className="lead">If you don&rsquo;t like the idea of waking up tired and sore, after a 0-3 loss where you didn&rsquo;t play well and you got beat by a far better team, to go to the gym early to get extra repetitions on a skill you&rsquo;re not so strong in, going through a poorly-designed practice with half-motivated players who don&rsquo;t speak to you in your language, having to stop at the grocery store where you still can&rsquo;t read the labels yet, to make some food and recover because tomorrow is an 11-hour bus ride across the country to go play an away match&hellip;</p>
                <p className="lead">Then this path might not be for you.&nbsp;</p>
                <p className="lead">But if this idea still sounds like fun to you; if you can still find, connect, or create meaning, a &ldquo;why&rdquo; for all this chosen struggle. If you can channel that passion and drive day after day after day. If you love adventure, experiences, dealing with the best and worst of people, then you&rsquo;re in for a ride that will challenge your character, drive, grit, focus, passion, interpersonal skills, consistency, resiliency and more.&nbsp;</p>
                <p className="lead">Your path will include the highest highs and lowest lows. I&rsquo;ve come back from down 0-2 to win a match in front of a full home crowd that sent us into a Cup Final match with 10,000 spectators. In a similar high stakes match I&rsquo;ve also been on the receiving end of an upset after being up 2-0 with no fans in the crowd.&nbsp;</p>
                <p className="lead">And that&rsquo;s just on the court outcomes of the team. Something that is never in your direct control.&nbsp;</p>
                <p className="lead">You CAN control your process and how you work, how you compete, your attitude, your energy, your girt, gratitude, and determination.&nbsp;</p>
                <p className="lead">Another skill that served me well on this path is that I&rsquo;m a great learner. To just take the last example, I dove deep and dissected why we faced that bitter upset, why we faded against a team that was not as talented as we were. Besides technical and team aspects, as well as the randomness of sport, I learned that they recently had begun fueling themselves with extremely high quality food. The entire team. I have no doubt that that was an edge in this 5-set match. Luckily, I was able to learn from that and incorporate that into my process and my game, and the game of my team for the next season. This is just one way I seek to learn and compete against my past &ldquo;failures&rdquo; and opportunities to improve.&nbsp;</p>
                <p className="lead">I&rsquo;m a competitor, and in this way and in others I am competing to be the best person and player I can be day in, day out.&nbsp;</p>
                <p className="lead">When you choose this competitive lifestyle, you don&rsquo;t always win. But I loved it regardless. &nbsp;</p>
                <p className="lead">Injured with an ankle the size of a balloon and out for months? Still loved it.&nbsp;</p>
                <p className="lead">Sitting on the bench even though you were giving everything you had inside you, grinding in the gym and the weight room and in all the other areas of your life, preparing for months to play one point as one blocking sub and you were a centimeter away from blocking one of the best attackers in the world...but you actually got tooled...still loved it and wanted more and stayed hungry to improve.&nbsp;</p>
                <p className="lead">You&rsquo;re joining the entertainment industry in one way, because that is what puts butts in seats, eyes on screens, and sponsors interested. But a lot of this business is about winning.&nbsp;</p>
                <p className="lead">Chasing Olympic success and glory, as Hugh McCutcheon says, is working four years to be good for two weeks, to hopefully be good for two hours. The professional scene is equally unforgiving.&nbsp;</p>
                <p className="lead">Those who have experienced it know, and that&rsquo;s why you hear so much talk about &ldquo;process.&rdquo; Because it&rsquo;s the only thing in our control. The score ultimately takes care of itself.&nbsp;</p>
                <p className="lead">This is a small glimpse into my journey of becoming the best player and person I can be-one which continues. Volleyball has given me so much, and I want to continue to give back to the sport, too.</p>
                <div class="captioned-image-container">
                    <figure>
                        <Image loader={()=> codyBerlin} src={codyBerlin} width={1456} height={970}/>
                        <figcaption class="figure-caption">Pure jubilation after helping my team win the German Championship</figcaption>
                    </figure>
                </div>
                <h3><strong>More GREAT resources to help you understand this world&nbsp;</strong></h3>
                <p className="lead">Volleyball journeyman Dustin Watten on Going Pro (linked above)</p>
                <p className="lead"><a href="https://www.dustywatten.com/blogs/news/so-you-want-to-go-pro-heres-what-you-need-to-know" className={`${ArchiveStyles.archiveLink}`} rel="">https://www.dustywatten.com/blogs/news/so-you-want-to-go-pro-heres-what-you-need-to-know</a>&nbsp;</p>
                <p className="lead">Finding the right situation (This may not always be overseas)</p>
                <p className="lead"><a href="https://marklebedew.com/2011/04/10/a-guide-to-playing-volleyball-professionally/" className={`${ArchiveStyles.archiveLink}`} rel="">https://marklebedew.com/2011/04/10/a-guide-to-playing-volleyball-professionally/</a></p>
                <p className="lead">Some random reads on the topic at large to get a better understanding of the career path you are considering:&nbsp;</p>
                <p className="lead"><a href="https://www.theartofcoachingvolleyball.com/spiking-for-dollars/" className={`${ArchiveStyles.archiveLink}`} rel="">https://www.theartofcoachingvolleyball.com/spiking-for-dollars/</a></p>
                <p className="lead"><a href="https://www.theartofcoachingvolleyball.com/how-volleyball-players-can-market-themselves-to-foreign-club-teams/" className={`${ArchiveStyles.archiveLink}`} rel="">https://www.theartofcoachingvolleyball.com/how-volleyball-players-can-market-themselves-to-foreign-club-teams/</a></p>
                <p className="lead">Satire but also not wrong: <a href="http://www.thepathimon.com/blog/job-posting-professional-volleyball-player" className={`${ArchiveStyles.archiveLink}`} rel="">http://www.thepathimon.com/blog/job-posting-professional-volleyball-player</a></p>
                <p className="lead"><a href="http://bringitusa.com/" rel="">Bring it USA</a> has been in the space for decades doing travel tours, player exposure tours, and more</p>
                <p>Note*: <a href="https://coachingvb.com/uk-university-volleyball-americans/" className={`${ArchiveStyles.archiveLink}`} rel="">There are also a number of universities in the UK where you can pursue your masters degree and continue to play.&nbsp;</a></p>
                <p>Note**: At some point you will need a work visa to go work in whatever country! Sometimes the club can take care of this after you arrive. SOMETIMES NOT! Players have missed months of their seasons waiting on a visa or getting caught in international problems that way.&nbsp;</p>
                <p>***Sometimes this is actually also an opportunity: If you can get any kind of European passport&mdash;GET IT</p>
                <p>****Working holiday programs between countries can also open up opportunities <a href="https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria/working-holiday-programmes/" className={`${ArchiveStyles.archiveLink}`} rel="">Austria anyone?</a> (if you&rsquo;re from Canada, Chile, Australia, Israel, New Zealand&hellip;.etc.) also note that these processes can take a long time but it means that teams won&rsquo;t need to process the working visa. &nbsp;</p>
                <p className="lead"><a href="https://goprincetontigers.com/news/2021/1/14/mens-volleyball-cody-kessel-15-lives-pro-volleyball-dream-in-germany.aspx" className={`${ArchiveStyles.archiveLink}`} rel="">&ldquo;Cody Kessel &lsquo;15 Lives Pro Volleyball Dream in Germany&rdquo;</a></p>
                <p className="lead">Thank you to Julian Moses at <a href="https://www.volleyhead.com/" className={`${ArchiveStyles.archiveLink}`} rel="">Volleyhead</a> who originally inspired me to write this.&nbsp;</p>
                <p className="lead">And thank you to all who have been a part of this wild, amazing, incredible journey.&nbsp;</p>
                <p className="lead"><br/></p>
                <p className="lead"><br/></p>
                <p className="lead">If you&rsquo;ve read all this, and STILL want to pursue professional or semi-professional volleyball, &nbsp;then this path might truly be for you. Please reach with any further specific questions and I can assist you on your journey.&nbsp;</p>
                <p className="lead">You can follow my journey on social media: <a href="https://www.instagram.com/codykessel/" className={`${ArchiveStyles.archiveLink}`} rel="">@codykessel</a>, <a href="https://codykessel.substack.com/" className={`${ArchiveStyles.archiveLink}`} rel="">read my occasional newsletter</a>, dig into moments <a href="https://codykessel.wordpress.com/" className={`${ArchiveStyles.archiveLink}`} rel="">from my old blog</a>, or shoot me an email at: kesselcody@gmail.com</p>
                <p className="lead">Looking forward to hearing from you and reading about your journey soon.&nbsp;</p>
            </div>
            <ConvertKitSignUp />
            <div>
                <h3>
                    Ask us Anything!
                </h3>
                <AskAQuestion />
            </div>
           
            <Footer />
        </div>
        
    )
}