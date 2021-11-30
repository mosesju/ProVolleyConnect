import styles from '../../styles/Home.css'

export default function HomeJumbotron() {
    return (
        <div className="jumbotron">
          {/* <h1 className={styles.gradientText} id={styles.title}></h1>   */}
          <p className={`display-5 ${styles.colorBlue} text-center`}>Volleyball information you can <strong>Trust</strong></p>
          <img src="volleyball_equip.jpeg" class="img-fluid" alt="Banner image ball and hands"></img>
          <p className="lead text-center">
            <a className={`btn btn-primary btn-lg ${styles.padder}`} href="#" role="button">Get your FREE membership!</a>
          </p>
          <p className="lead text-center">We have no conflicts of interest: Our team is composed of former pros and coaches; all we do all day, every day, is watch and analyze professional Volleyball, to answer your questions and tell the games stories.</p>
          
          <hr className="my-4" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        </div>
    )
}