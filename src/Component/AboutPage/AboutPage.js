import "./AboutPage.css";
import { Link } from "react-router-dom";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";

function AboutPage() {
  return (
    <div className="bg-about">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark navitem-margin">
        {/* <Link className="navbar-brand" to="">
          <img
            src="https://www.clipartkey.com/mpngs/m/36-364919_nuvola-apps-bookcase-library-management-system-logo-png.png"
            width="40"
            height="60"
            alt=""
          />
        </Link> */}
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
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <button className=" nav-link btn btn-warning" type="submit">
                About Library
              </button>
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
            <li className="nav-item active ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Aboutpage-Title">
        Welcome to
        <div className="aboutpage-secondtitle">Library Management System</div>
      </div>
      <div className="container aboutpage-description">
        <div className="row">
          <div>
            Online Library Management project in Spring and Hibernate is
            complete solution for all the manual problem we face during the
            library management.Mainly there are two main actor of the
            application that are going to operate the application
            1)Admin/Librarian 2)Users/Students.Book or Digital Books is the main
            module of library management system.Books are assets that we are
            storing in the database with some details like name,author name and
            a version and a PDF format.So admin can perform crud operation and
            issued the book to the users.
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
