import "./App.css";
import PictureMe from "./assets/AxelF.png";
import Linkedin from "./assets/Linkedin.png";
import Github from "./assets/Github.png";
import C from "./assets/c#.png";
import git from "./assets/git.png";
import docker from "./assets/docker.png";
import python from "./assets/python.png";
import java from "./assets/java.png";
import springBoot from "./assets/springboot.png";
import sql from "./assets/sql.png";
import "./Button.css";
import Projects from "./components/proyects/Projects";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <hr className="line"></hr>
      <MainPart />
      <SkillSection />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

function MainPart() {
  return (
    <div className="main_container">
      <div>
        <img src={PictureMe} alt={PictureMe}></img>
        <div className="red_socials">
          <ul>
            <li>
              <img className="linkedin" src={Linkedin} alt={Linkedin}></img>
            </li>
            <li>
              <img className="github" src={Github} alt={Github}></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_container_information">
        <h1>Hola, Soy Axel</h1>
        <p className="information_basic">
          Soy un estudiante apasionado de Ingeniería de Software que ha estado
          inmerso en esta carrera desde el año{" "}
          <span className="information_accented">2020.</span>Desde siempre, mi
          curiosidad por comprender cómo se llevan a cabo las cosas en el ámbito
          del software ha sido una fuente constante de motivación. Esta
          fascinación me ha impulsado a profundizar en los conocimientos y
          habilidades necesarios para forjar soluciones innovadoras. Mi objetivo
          principal es generar un impacto significativo a través de la creación
          de software. Me esfuerzo por explorar continuamente nuevas
          perspectivas para abordar desafíos, siempre buscando maneras creativas
          de contribuir al mundo de la tecnología. Disfruto tanto del desarrollo
          frontend como del backend, pero siento una conexión especial con el
          backend. Mi experiencia incluye la exploración de fundamentos de
          programación,
          <span className="information_accented">
            diseño de patrones de software y conceptos clave en arquitectura de
            software, abarcando desde arquitecturas monolíticas hasta enfoques
            más modernos como microservicios.
          </span>
          Esta diversidad de conocimientos me permite tener una visión integral
          y adaptativa al enfrentarme a proyectos y problemas complejos en el
          ámbito de la ingeniería de software. A medida que avanzo en mi
          carrera, estoy comprometido a seguir aprendiendo y evolucionando,
          siempre dispuesto a enfrentar nuevos retos y aportar soluciones
          innovadoras al mundo tecnológico. Mi portafolio refleja no solo mi
          habilidad técnica, sino también mi enfoque apasionado y mi deseo
          constante de superación en el campo de la Ingeniería de Software.
        </p>
      </div>
    </div>
  );
}

function SkillSection() {
  return (
    <div className="skills_container">
      <h2 className="skills_title">0.2 Skills && Tools</h2>
      <div className="skills_list">
        <ul>
          <li>
            <img src={git} alt={git}></img>
            Git & Github
          </li>
          <li>
            <img src={docker} alt={docker}></img>
            Docker
          </li>
          <li>
            <img src={C} alt={C}></img>
            C#
          </li>
          <li>
            <img src={python} alt={python}></img>
            Python
          </li>
          <li>
            <img src={java} alt={java}></img>
            Java
          </li>
          <li>
            <img src={springBoot} alt={springBoot}></img>
            SpringBoot
          </li>
          <li>
            <img src={sql} alt={sql}></img>
            SQL
          </li>
        </ul>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education_container">
      <h2>0.4 Education</h2>
    </div>
  );
}

export default App;
