import React from 'react'
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
      <div className='Main-Container'>
      <div className="event_glow_up" />

        <main>
        <div className="event_headings">
                    <div className="event_heading">Gallery</div>
                </div>
          {/* <div className='trending-photos' id='heading'> Gallery </div> */}
          <div className='gallery_container'>

            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/D314eAeWixMsHHUbA" className="links-g-photo" rel='norefernce' target='blank'><h3 id='name'>Crafter's club Family</h3> 
                <img className='card-over-img' src="./hech.jpeg" alt="cover-photo" /></a>

            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/dXR25gY4ZL9mpcbF8" className="links-g-photo" rel='norefernce' target='blank'><h3 id='name'> Crafter's App launch</h3>
                <img className='card-over-img' src="./ard.jpeg" alt="cover-photo" /></a>

            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/hhg5cdLPbELP8dDM6" className="links-g-photo" rel='norefernce' target='blank'><h3 id='name'> Crafter's club service</h3>
                <img className='card-over-img' src="./cs.jpeg" alt="cover-photo" /></a>
            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/L1stAhZNVNu4joGi8" className="links-g-photo" rel='norefernce' target='blank'><h3 id='name'> Crafter's website launch</h3>
                <img className='card-over-img' src="./cam.jpg" alt="cover-photo" /></a>
            </div>
            
          </div>

        </main>
      </div>
    </>
  );
}

export default Gallery;
