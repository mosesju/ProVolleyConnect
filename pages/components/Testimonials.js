export default function Testimonials() {
  const headshot = "https://xvunwquprjgywjthgato.supabase.in/storage/v1/object/sign/agents/headshot.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhZ2VudHMvaGVhZHNob3QuanBnIiwiaWF0IjoxNjM3MTYxODUzLCJleHAiOjE5NTI1MjE4NTN9.oVqQMlVdHzL5KGeVGN1NJyr12UQkGyf7cZMwybA2a5E"

    return (
        <div className="container"> 
        <h1 className="display-5">What readers like you think</h1>
        <div className="card">
          <div className="card-body"> 
            <div class="d-flex flex-row bd-highlight mb-3">
              <img 
                  src={headshot} 
                  className="d-flex justify-content-center rounded-circle image-fluid"
                  height="150" width="150"
              />
              <div class="p-2 bd-highlight">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div class="d-flex flex-row align-bottom">
                    <p className="display-6">John Speraw</p>
                    <p className=""> Head College &amp; USA Men's National team Coach</p>
                  </div>
                  <div class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit purus ac dolor finibus volutpat. Nulla quis semper nibh. Maecenas eget orci imperdiet, sollicitudin neque convallis, ultrices velit. Nam commodo turpis sed vestibulum sagittis. Aliquam iaculis varius ex, sit amet. </div>
                </div>
              </div>
            </div>          
              
          </div>
        </div>
        </div>
    )
}