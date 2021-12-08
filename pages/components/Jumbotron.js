import styles from '../../styles/Home.module.css'
import { useState } from 'react';

const Jumbotron = (props) => {
    const jumboStyle = {
      backgroundColor: "#0070f3",
      backgroundImage: "url(https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/volleyball_equip.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy92b2xsZXliYWxsX2VxdWlwLmpwZWciLCJpYXQiOjE2Mzg5NTI1MTYsImV4cCI6MTk1NDMxMjUxNn0.PDKMMj-Syo5PyUiSNMCmECwtauaR8JGjgcaeN0t7lqw)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minWidth:'100%',
      height: 'auto',
      padding: '10px'
    }
    return (
        <div style={ jumboStyle }>
          <p className={`display-2 text-center ${styles.jumboShadowMain}`}>{ props.props.headline }</p>
          {
              props.props.buttonText ? (
                <p className="lead text-center">
                    <a className={`btn btn-primary btn-lg ${styles.padder}`} href={ props.props.buttonLink } role="button">{ props.props.buttonText }</a>
                </p>
            ): null
          }
          <p className={`display-6 text-center ${styles.jumboShadowSub}`}>{ props.props.subHeading }</p>
        </div>
    )
}

export default Jumbotron;