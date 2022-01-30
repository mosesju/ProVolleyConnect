import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function ExploreCols() {
    return (
        <div className={`col-md-10 ${styles.spacing}`}>
        <div className="row">
          <div className="col-md">
            <div className="card">
            <div className="card-body">
                <p className="card-title display-6">Agents</p>
                <h6 className={`lead mb-2 text-muted ${styles.topSpace}`}>Get all the information you need to understand Agents and how they work</h6>
                <ul className={styles.topBottomSpace}>
                    <Link href="/agents/list">
                        <li>
                        <u className={styles.colorBlue}>List of Agents</u>
                        </li>
                    </Link>
                    <Link href="/archive/all-about-agents">
                        <li>
                            <u className={styles.colorBlue}>All About Agents</u>                      
                        </li>
                    </Link>
                    <Link href="https://volleyconnect.ghost.io/contracts/">
                        <li>
                        <u className={styles.colorBlue}>Contracts</u>
                            
                        </li>
                    </Link>
                </ul>
                {/* <p className="card-text">extra text</p> */}
                <Link href="/agents">
                    <button className="btn btn-primary">
                        More on Agents
                    </button>
                </Link>
            </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title display-6">For Athletes</h5>
                <h6 className={`lead mb-2 text-muted ${styles.topSpace}`}>Explore a few of the things you should know <em>should</em> know before your pro career</h6>
                <ul className={styles.topBottomSpace}>
                    <Link href="/archive/secret-guide">
                        <li>
                        <u className={styles.colorBlue}>Secret Guide to pro Volley</u>
                  </li>
                    </Link>
                    <Link href="/archive/so-you-want-to-play-professional-volleyball">
                        <li>
                            <u className={styles.colorBlue}>Cody Kessel on going Pro</u>                      
                        </li>
                    </Link>
                    <Link href="/archive/athlete-faq">
                        <li>
                        <u className={styles.colorBlue}>Athlete FAQ</u>
                            
                        </li>
                    </Link>
                </ul>
                {/* <p className="card-text">extra text</p> */}
                <Link href="/athletes">
                    <button className="btn btn-primary">
                        More for Athletes
                    </button>
                </Link>
                </div>            
            </div>
          </div>
          <div className="col-md">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title display-6">For Parents</h5>
                <h6 className={`lead mb-2 text-muted ${styles.topSpace}`}>Explore all the questions you want answered, but your child doesn&apos;t know yet</h6>
                <ul className={styles.topBottomSpace}>
                    <Link href="https://volleyconnect.ghost.io/general-questions-answered-for-parents/">
                        <li>
                            <u className={styles.colorBlue}>Parent FAQ</u>                      
                        </li>
                    </Link>
                    <Link href="https://volleyconnect.ghost.io/pro-volleyball-healthcare/">
                        <li>
                        <u className={styles.colorBlue}>Healthcare Basics</u>
                        </li>
                    </Link>
                    <Link href="/archive/living-situation">
                        <li>
                        <u className={styles.colorBlue}>Apartment Basics</u>
                            
                        </li>
                    </Link>
                </ul>
                {/* <p className="card-text">extra text</p> */}
                <Link href="/parents">
                    <button className="btn btn-primary">
                        More for Parents
                    </button>
                </Link>
                </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title display-6">For Coaches</h5>
                <h6 className={`lead mb-2 text-muted ${styles.topSpace}`}>Explore the information you need to help your players get to the next level</h6>
                <ul className={styles.topBottomSpace}>
                    <Link href="https://volleyconnect.ghost.io/all-about-agents/">
                        <li>
                            <u className={styles.colorBlue}>Coach FAQ</u>                      
                        </li>
                    </Link>
                    <Link href="/archive/compliance">
                        <li>
                        <u className={styles.colorBlue}>Compliance</u>
                        </li>
                    </Link>
                    
                    <Link href="/archive/contracts">
                        <li>
                            <u className={styles.colorBlue}>Contracts</u>
                        </li>
                    </Link>
                </ul>
                {/* <p className="card-text">extra text</p> */}
                <Link href="/coaches">
                    <button className="btn btn-primary">
                        More for Coaches
                    </button>
                </Link>
                </div>
            </div>
          </div>
        </div> 
      </div>
    )
}