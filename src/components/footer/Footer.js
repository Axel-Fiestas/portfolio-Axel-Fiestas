import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_col">
          <h4>Links útiles</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>Redes sociales</h4>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>Contacto</h4>
          <p>Dirección: 123 Calle, Ciudad, País</p>
          <p>Teléfono: 123-456-7890</p>
          <p>Email: correo@example.com</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 Axel Fiestas</p>
      </div>
    </footer>
  );
}

export default Footer;
