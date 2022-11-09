import { useState } from "react"

export default function ServicesExperience(){

    const [services] = useState([
        {
            icon: "fa-solid fa-code",
            title: "Web Development",
            description: "Structuring and design focused on functional websites.",
            active: false,
          },
          {
            icon: "fa-pen-to-square",
            title: "Copywriting",
            description: "Good handle of writing focused in the digital environment.",
            active: true,
          },
          {
            icon: "fa-solid fa-hashtag",
            title: "Digital Marketing",
            description: "Strategic thinking and creation in the digital environment.",
            active: false,
          }
    ])

    return(
        <section className="services-experience">
            <div className="container">
                <div className="services" id="services">
                    {services.map((service, i) => (
                        <div key={i} className={`service ${service.active ? "active" : ''}`}>
                            <i className={`fas ${service.icon}`}/>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {/* <button className="btn">Know More</button> */}
                        </div>
                    ))}
                </div>
                <div className="experiences" id="experiences">
                    <div className="experience">
                        <h3>Web</h3>
                        <p>Development</p>
                    </div>
                    <div className="portfolios">
                        <div className="portfolio">
                            <h4>10 +</h4>
                            <p>Projects</p>
                        </div>
                        <div className="portfolio">
                            <h4>Front-end</h4>
                            <p>Vanilla JS, React, Redux</p>
                        </div>
                        <div className="portfolio">
                            <h4>Back-end</h4>
                            <p>Node JS and Express</p>
                        </div>
                        <div className="portfolio">
                            <h4>Database</h4>
                            <p>PostgreSQL and Sequelize</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}