import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import dynamic from 'next/dynamic'
import ConvertKitSignUp from './ConvertKitSignUp';


const Jumbotron = (props) => {
    const jumboStyle = {
      backgroundColor: "#0070f3",
      backgroundImage: "url(https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/home-bg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9ob21lLWJnLnBuZyIsImlhdCI6MTYzOTA1NDgwMCwiZXhwIjoxOTU0NDE0ODAwfQ.8WxRrVQR1Lg53DeLUKkRbkQR_FGcc1pepMTVSa1z5gQ)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minWidth:'100%',
      height: 'auto',
      padding: '50px'
    }
    return (
        <div style={ jumboStyle }>
          {/* ${styles.jumboShadowMain} */}
          <h1 className={`display-2 text-center ${styles.colorWhite} ${styles.spacingTop}`}>{ props.props.headline }</h1>
          <p className={`display-6 text-center ${styles.colorWhite}`}>{ props.props.subHeading }</p>
          {
              props.props.buttonText ? (
                <div className="d-flex justify-content-center">
                  <ConvertKitSignUp />
                </div>
                
                // <p className="lead text-center">
                //     <a className={`btn btn-primary btn-lg ${styles.padder}`} href={ props.props.buttonLink } role="button">{ props.props.buttonText }</a>
                // </p>
            ): null
          }
        </div>
    )
}

export default dynamic(() => Promise.resolve(Jumbotron), {
  ssr:false
});