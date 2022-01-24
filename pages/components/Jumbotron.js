import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import dynamic from 'next/dynamic'


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
          <p className={`display-2 text-center ${styles.colorWhite} ${styles.spacingTop}`}>{ props.props.headline }</p>
          <p className={`display-6 text-center ${styles.colorWhite}`}>{ props.props.subHeading }</p>
          {
              props.props.buttonText ? (
                <div>
                  <div className={`d-flex justify-content-center lead ${styles.colorWhite}`}>
                    Enter your email to get started
                  </div>
                  <div className="d-flex justify-content-center">
                    <script async data-uid="dc9f9547ef" src="https://dogged-pioneer-9796.ck.page/dc9f9547ef/index.js"></script>
                  </div>
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