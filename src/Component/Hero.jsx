import React from 'react'
import {Link} from 'react-scroll'
import "./style.css"

const Hero = () => {
  return (
    <>
      <section className="hero_container margin">
        <div className="hero_details">
            <div className="hero_title">
                <h1>We Will Handle The Recruitment Process For You</h1>
            </div>
            <div className="hero_description">
                <p>We make the hiring process more effectiveand more efficient</p>
            </div>
            <div className="hero_btn">
                <Link to="connect" spy={true} smooth={true} offset={-10} duration={500}>Contact Us and Start Recruitment</Link>
            </div>
        </div>
        <div className="hero_img">
            <img src="https://media.istockphoto.com/id/1468372164/photo/happy-white-collar-worker-getting-his-stuff-into-his-new-office.webp?b=1&s=170667a&w=0&k=20&c=eS2-_9HALxD0QnULusU4LdnDpwmgSehBhzFjWvq2L6k=" alt="hero_img" />
        </div>
      </section>
    </>
  )
}

export default Hero
