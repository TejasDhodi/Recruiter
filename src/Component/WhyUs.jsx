import React from 'react'
import SectionTitle from './SectionTitle'
import { Helpcard } from './Api'
import './style.css'
const WhyUs = () => {
    return (
        <>
            <section className="why_us margin">
                <SectionTitle title="What can We help you with?" />
                <div className="cards_container">
                    {
                        Helpcard.map((e, index) => {
                            const {title, icon} = e;
                            return (
                                <div className="card" key={index}>
                                    <div className="card_icon">
                                        {icon}
                                    </div>
                                    <div className="card_title">
                                        <h3>{title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default WhyUs
