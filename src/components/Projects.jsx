import { useState } from "react"
import projectOne from "../images/pern-stack.png"
import projectTwo from "../images/react-crud.png"
import projectThree from "../images/e-commerce-app.png"
import projectFour from "../images/emoji-selector.png"
import projectFive from "../images/book-library.png"
import projectSix from "../images/finder-app.png"
import projectSeven from "../images/weather-widget.png"

export default function Projects(){

    const [projects] = useState([
          {
            title: "Project 1",
            img: projectOne,
            gLink: "https://github.com/Michael101599/pern-stack",
            lLink: "",
            description: "Conventional ToDo list created with React JS, but reinforcement with a Backend which have Express (Node JS library), and PostgreSQL to register in a database, the ToDo's that the user want save."
          },
          {
            title: "Project 2",
            img: projectTwo,
            gLink: "https://github.com/Michael101599/crud-react",
            lLink: "",
            description: "React CRUD application (Create, Read, Update and Delete) supported with JSON Server, that use all the crud methods like Get, Post, Put, and Delete."
          },
          {
            title: "Project 3",
            img: projectThree,
            gLink: "https://github.com/Michael101599/e-commerce-app",
            lLink: "",
            description: "Basic scheme of an e-commerce app created with React JS, and supported with Redux to manage states. The project will be improve with another functionalities, but the logic and functionality of React and Redux can be reflect in the project."
          },
          {
            title: "Project 4",
            img: projectFour,
            gLink: "https://github.com/Michael101599/emoji-selector",
            lLink: "",
            description: "App to select different emojis created with React JS. This is componed by an input that allows the user to write and introduce different emojis (stored inside the code), and find an specific emoji by key words or letters."
          },
          {
            title: "Project 5",
            img: projectFive,
            gLink: "https://github.com/Michael101599/book-library",
            lLink: "",
            description: "Library app that allows the user list books with some info, and show them. The app was created with React JS, and the book info is provided by the user. The interface can be improved, but the app reflect the logic of React JS and the application of the useRef hook."
          },
          {
            title: "Project 6",
            img: projectSix,
            gLink: "https://github.com/Michael101599/buscador-app",
            lLink: "",
            description: "Little search app created with React JS, which provides suggestions of searches of data that was storage inside the code."
          },
          {
            title: "Project 7",
            img: projectSeven,
            gLink: "https://github.com/Michael101599/weather-widget",
            lLink: "",
            description: "Weather widget created with React JS, that make requests to an api (Weather API) and receive responses for show the current weather, and the location of the city, which the user write in an input. The app allows to display how to make requests to an api, and show the results."
          }
    ])

    return(
        <section className="projects" id="projects">
            <div className="container">
              <div className="title">
                <h3>Featured Projects</h3>
                <a href="https://github.com/Michael101599" target="_blank" className="btn" rel="noreferrer">
                  View All
                </a>
              </div>
              <div className="projects-wrapper">
                {projects.map((project, i) => (
                  <div className="project" key={i}>
                    <div className="img-container">
                      <img src={project.img} alt={project.title} />
                    </div>
                    <div className="description">
                      <h4>{project.title}</h4>
                      <div className="links">
                        <a href={project.gLink} target='_blank' rel="noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href={project.lLink} target='_blank' rel="noreferrer">
                          {/* <i className="fa fa-globe"></i> */}
                        </a>
                      </div>
                    </div>
                    <p>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </section>
    )
}