import ThemeToggle from "./ThemeToggle";
import "../scss/modules/header.scss";

export default function Header() {
  return (
    <header className="header">
      <ThemeToggle />
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
