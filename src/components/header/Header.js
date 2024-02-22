import "./Header.css";

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
            <li>0.3 Projects</li>
            <li>0.4 Education</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
