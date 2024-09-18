import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/#titlecard">
        <img src="./img/logo.png" alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link smooth to="/#about">
            om mig
          </Link>
        </li>
        <li>/ /</li>
        <li>
          <Link smooth to="/#projects">
            projekter
          </Link>
        </li>
        <li>/ /</li>
        <li>
          <Link smooth to="/#contact">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
