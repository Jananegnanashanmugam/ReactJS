import "./SearchBook.css";
import { Link } from "react-router-dom";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchBook() {
  const [getDetails, setDetails] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:3000/Books")
      .then((result) => {
        let elems = result.data;
        elems.sort((a, b) => a.id - b.id);
        setDetails(elems);
        let last = elems.slice(-1)[0].id;
        console.log(last.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navitem-margin">
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
              <Link className="nav-link" to="/aboutPage">
                About Library
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to=" ">
                Rules and Regulation
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to=" ">
                Price Card
              </Link>
            </li>
            <li className="nav-item active">
              <button className="nav-link btn btn-warning" type="submit">
                Search
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h2>Search Book</h2>
        <div className="form-group mx-sm-3 row">
          <label htmlFor="book-title" className="col-mb-2 col-form-label">
            Book Title :
          </label>
          <div className="col-mb-2">
            <input
              type="text"
              className="form-control"
              id="booktitlesearch"
              name="booktitletextbox"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-round btn-md" value="Search">
          Search
        </button>

        <br />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Book ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Author Name</th>
                <th scope="col">No. of Books Available</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getDetails.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{obj.BookId}</td>
                    <td>{obj.BookTitle}</td>
                    <td>{obj.Description}</td>
                    <td>{obj.AuthorName}</td>
                    <td>{obj.BooksAvailable}</td>
                    <td>
                      <Link to="https://www.google.co.in">Purchase</Link>
                    </td>
                  </tr>
                );
              })}
              {/*  <tr>
                <th scope="row">Jacob</th>
                <td>Accountant</td>
                <td>Turkey</td>
                <td>32</td>
                <td>23/12/2022</td>
                <td>20,0000</td>
                <td>
                  <a href="https://www.google.co.in">Purchase</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Angelena Joces</th>
                <td>Chief Executive Officer</td>
                <td>London</td>
                <td>42</td>
                <td>2/11/2022</td>
                <td>200000</td>
                <td>
                  <a href="https://www.google.co.in">Purchase</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Brendon Kaiyner</th>
                <td>Software Engineer</td>
                <td>Doncaster</td>
                <td>34</td>
                <td>2/1/2022</td>
                <td>4500000</td>
                <td>
                  <a href="https://www.google.co.in">Purchase</a>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default SearchBook;
