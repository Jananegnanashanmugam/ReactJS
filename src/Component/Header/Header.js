import styles from "./Header.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navitem-margin">
        <Link className="navbar-brand" to=" "></Link>
        <Link className="navbar-brand" to="">
          <i className="fa fa-address-book" aria-hidden="true"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="aboutPage">
                About Library
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="">
                Rules and Regulation
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="">
                Price Card
              </Link>
            </li>
            <li className="nav-item active navcolor">
              <Link className="nav-link padding-header" to="login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
