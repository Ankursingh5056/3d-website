import React from 'react'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Container style={{marginLeft: "100px"}}>
        <div className="row">
          <div className="col-6 shadow-sm: Small shadow  text-center" style={{height: "400px",width:"400px"}} >
            <div className="row">
            <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/ffcab9cbf04c825a3df3db993aefbb77-v2.svg" className='float-end' alt="" height="200px" />
            <br />
            <h2>sell 3D models on the PixelDepth</h2>
            </div>
          </div>
          <div className="col-6 shadow-sm: Small shadow  text-center" style={{height: "400px",width:"400px"}}>
          <div className="row">
            <img src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/58c377b3c70745be4a6c8391011ea77a-v2.svg" className='float-end' alt="" height="200px" />
            <br />
            <h2>sell 3D models on the PixelDepth</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
