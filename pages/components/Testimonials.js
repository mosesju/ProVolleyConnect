import styles from '../../styles/Home.module.css'

export default function Testimonials() {
  const johnSperaw = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/util-photos/John-Speraw.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsLXBob3Rvcy9Kb2huLVNwZXJhdy5wbmciLCJpYXQiOjE2Mzc2NzAwOTUsImV4cCI6MTk1MzAzMDA5NX0.GyzdqfDFCHPSxBOPd_2FRTRd-LN2_B4IHswH7qBYVuM"

    return (
        <div className="container" id={styles.verticalAlignBottom}> 
          <h1 className="display-5">What readers like you think</h1>
          <div className="card">
            <div className="card-body"> 
              <div className="row">
                <div className="col-md-3">
                <img 
                    src={johnSperaw} 
                    className="d-flex justify-content-center rounded-circle image-fluid"
                    height="150" width="150"
                />
                </div>
                <div className="col-md-9">
                    <p className="display-6">John Speraw</p>
                    <h6> Head College &amp; USA Men&apos;s National Team Coach</h6>
                    <div className="lead">I&apos;m excited to have a trusted resource for professional volleyball information. Over the last few years I&apos;ve had athletes consistently come up to me and ask what it takes to go pro.  How do they find an agent? When does the process start? What are the NCAA rules? The list goes on and on. Finally I can point them to a resource that has all the information they need and the stories of the athletes who have made the process work. </div>
                </div>
              </div>            
            </div>
          </div>
          
        </div>
    )
}