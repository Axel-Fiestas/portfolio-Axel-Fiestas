import "./App.css";
import PictureMe from "./assets/AxelF.png";
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
        <img src={PictureMe}></img>
        <div>
          <ul>
            <li>Logo Linkedin</li>
            <li>Logo Github</li>
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
    <div>
      <h2>0.2 Skills</h2>
      <div>
        <ul>
          <li>Git & Github</li>
          <li>Docker</li>
          <li>C#</li>
          <li>Python</li>
          <li>Java</li>
          <li>SpringBoot</li>
          <li>SQL</li>
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
