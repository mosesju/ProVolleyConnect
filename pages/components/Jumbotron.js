import styles from '../../styles/Home.module.css'
import { useState } from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
          {/* <h1 className={styles.gradientText} id={styles.title}></h1>   */}
    <p className={`display-5 ${styles.colorBlue} text-center`}>{ props.props.headline }</p>
          <img src={props.props.image} className="img-fluid" alt={ props.props.imageAlt }></img>
          {
              props.props.buttonText ? (
                <p className="lead text-center">
                    <a className={`btn btn-primary btn-lg ${styles.padder}`} href={ props.props.buttonLink } role="button">{ props.props.buttonText }</a>
                </p>
            ): null
          }
          
          
        <p className="lead text-center">{ props.props.subHeading }</p>
          
          <hr className="my-4" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        </div>
    )
}

export default Jumbotron;