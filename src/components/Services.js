import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service, idx) => {
          const { id, icon, title, text } = service
          return (
            <div key={id} className="border-animation">
              <article className="service">
                <i>{icon}</i>
                <h3>{title}</h3>
                <div className="underline"></div>
                <p>{text}</p>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
