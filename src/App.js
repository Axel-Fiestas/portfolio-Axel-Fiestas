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
function App() {
  return (
    <div>
      <Header />
      <hr className="line"></hr>
      <MainPart />
      <SkillSection />
      <Proyects />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header_title">
        <h1 className="header_title_word">axel.</h1>
        <h1 className="header_title_word">Fiestas</h1>
      </div>
      <div className="header_bar">
        <span>Bienvenido</span>
        <div>
          <ul className="header_list">
            <li>0.1 Home</li>
            <li>0.2 Skills</li>
            <li>0.3 Proyectos</li>
            <li>0.4 Educación</li>
          </ul>
        </div>
      </div>
    </header>
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

function Proyects() {
  return (
    <div>
      Imagen
      <h2>Shuffler</h2>
      <p>24 Nov. 2020</p>
      <p>
        Desarrollé un proyecto utilizando Python y TKinter para la interfaz
        gráfica de usuario. Esta aplicación te brinda la capacidad de recibir
        recomendaciones de canciones a partir de una selección hecha por el
        usuario. Para la obtención del conjunto de datos, utilicé la API de
        Spotify, implementando algoritmos eficientes como el de fuerza bruta
        para procesar la información y proporcionar recomendaciones musicales
        personalizadas
      </p>
    </div>
  );
}

export default App;
