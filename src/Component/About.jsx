import React from 'react'
import SectionTitle from './SectionTitle'
import { CompanyImg } from './Api'
import './style.css'
const About = () => {
  return (
    <>
      <section id='about' className="about_section margin">
        <SectionTitle title="Trusted by local International Businesses" />
        <div className="companies">
          {
            CompanyImg.slice(0, 5).map((e, index) => {
              return (
                <img src={e.img} alt="" key={index}/>
              )
            })
          }
        </div>

        <div className="about_details_container">
          <div className="about_details">
            <SectionTitle title="Who are we and what we do" description="We Understand recruiting is a difficult and time consuming processs. Our service offers integrated solutions that combines the power of video, tools, workflow, analytics and feedback collaboration to optimize the hiring process." />
          </div>
          <div className="about_img">
            <img src="https://media.istockphoto.com/id/1468372164/photo/happy-white-collar-worker-getting-his-stuff-into-his-new-office.webp?b=1&s=170667a&w=0&k=20&c=eS2-_9HALxD0QnULusU4LdnDpwmgSehBhzFjWvq2L6k=" alt="hero_img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
