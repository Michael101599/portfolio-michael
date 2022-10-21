import image from '../images/portfolio-image.png'

export default function Banner(){
    return(
        <section className="banner" id="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="banner-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="banner-content">
                        <h6>Hello, I'm Michael Alvarado</h6>
                        <h3>Web Developer & Social Communicator</h3>
                        <p>
                            I'm an autodidact web developer with knowledges in Javascript (front-end and back-end). Also, I'm a Social Communicator from the Autonomous University of Occident (UAO), with good skills in writing and actually, I am making a specialization in Digital Business Management. I made different personal projects in vanilla JS, React JS and Redux (Front-end), Node JS, Express, PostgreSQL, Sequelize (Back-end and Database).
                        </p>
                        <a className="btn" href="#projects">My Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}