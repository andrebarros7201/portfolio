import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="header-left">
        <h3>André Barros</h3>
      </div>
      <nav className="header-right">
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
