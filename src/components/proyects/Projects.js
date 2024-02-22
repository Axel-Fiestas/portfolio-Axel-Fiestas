import proyectos from "../../projects.json";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects_container">
      <h2>0.3 Projects</h2>
      <div className="project-container">
        {proyectos.map((proyecto, index) => (
          <div className="project" key={index}>
            <h3>{proyecto.name}</h3>
            <p>{proyecto.date}</p>
            <p>{proyecto.description}</p>
            <img src={proyecto.image} alt="Imagen del proyecto" />
            <div className="projects_buttons">
              <button
                className="css-button-sharp--blue"
                onClick={() => window.open(proyecto.github, "_blank")}
              >
                CODIGO FUENTE
              </button>
              {proyecto.hasDemo ? (
                <button
                  className="css-button-sharp--blue"
                  onClick={() => window.open(proyecto.linkDemo, "_blank")}
                >
                  DEMO
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
