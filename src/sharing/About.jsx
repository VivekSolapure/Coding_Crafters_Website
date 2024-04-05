import './About.css'
import React from 'react'


function About() {
  return (
    <>
    <div className='Main-container'>
        <p className='abt-title'> About Us</p>
        <main>
            <div className='abt-img'>
                <img className='img-1' src="/hech.jpeg" alt="just" />
            </div>
            <div className='content-abt' > 
            <span>
            At Coding Crafters, we ignite the passion for development by offering workshops on in-demand skills: <br/> 
             Master the fundamentals of HTML/CSS/JavaScript, the building blocks of web development. <br/>  Delve into advanced topics like building dynamic websites 
             with the MERN stack (MongoDB, Express.js, React.js, and Node.js). <br/> 
              Conquer the world of mobile app development with our Android app development workshops. <br/> 
             Sharpen your interview skills and dominate group discussions with our industry-standard mock GDs and interviews.</span>
                
            </div>
        </main>
    </div>
    </>
  )
}

export default About