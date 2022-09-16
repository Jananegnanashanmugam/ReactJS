import "./AddBook.css";
import { Link } from "react-router-dom";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";
import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [getAddBookForm, setAddBookForm] = useState({
    BookId: 0,
    BookTitle: "",
    Description: "",
    AuthorName: "",
    totalBooksCount: 0,
    BooksAvailable: 0,
    ISBNNo: "",
  });
  const onchangeAddbookHandler = (event) => {
    setAddBookForm({
      ...getAddBookForm,
      [event.target.name]: event.target.value,
    });
  };
  const fetchdata = () => {
    axios
      .get("http://localhost:3000/Books")
      .then((result) => {
        let elems = result.data;
        elems.sort((a, b) => a.id - b.id);
        let last = elems.slice(-1)[0].id;
        let addbookformvalues = {
          ...getAddBookForm,
          BookId: last + 1,
          totalBooksCount: parseInt(getAddBookForm.BooksAvailable, 10),
          BooksAvailable: parseInt(getAddBookForm.BooksAvailable, 10),
        };
        //setAddBookForm([...getAddBookForm, { bookid: bookID }]);
        setAddBookForm(addbookformvalues);
        createbook();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const createbook = () => {
    // let data = JSON.stringify(getAddBookForm);
    let url = "http://localhost:3000/Books";
    //const response = axios.post(url,data,{headers:{"Content-Type" : "application/json"}});
    axios
      .post(url, getAddBookForm)
      .then(() => {
        console.log("Item created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitAddBookHandler = (event) => {
    event.preventDefault();
    fetchdata();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navitem-margin">
        {/* <Link className="navbar-brand" to=" ">
          <img
            src="https://www.clipartkey.com/mpngs/m/36-364919_nuvola-apps-bookcase-library-management-system-logo-png.png"
            width="40"
            height="30"
            alt=""
          />
        </Link> */}
        <Link className="navbar-brand" to=" ">
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
            <li className="nav-item active navwordwrap">
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
              <Link className="nav-link" to="/searchBook">
                Search
              </Link>
            </li>
            <li className="nav-item active navcolor">
              <Link className="nav-link" to=" ">
                Add Book
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h2>Search Book</h2>
        <br />
        <div className="form-group mx-sm-3 row">
          <label
            htmlFor="book-title"
            className="col-mb-2 col-form-label text-truncate"
          >
            ISBN No:
          </label>
          <div className="col-mb-2">
            <input
              type="text"
              onChange={onchangeAddbookHandler}
              className="form-control"
              id="bookid"
              name="ISBNNo"
            />
          </div>
        </div>
        <div className="form-group mx-sm-3 row">
          <label
            htmlFor="bojok-title"
            className="col-mb-2 col-form-label text-truncate"
          >
            Book Title :
          </label>
          <div className="col-mb-2">
            <input
              type="text"
              onChange={onchangeAddbookHandler}
              className="form-control"
              id="booktitle"
              name="BookTitle"
            />
          </div>
        </div>
        <div className="form-group mx-sm-3 row">
          <label
            htmlFor="book-description"
            className="col-mb-2 col-form-label text-truncate"
          >
            Book Desc :
          </label>
          <div className="col-mb-2">
            <textarea
              onChange={onchangeAddbookHandler}
              className="form-control"
              id="book-desc"
              name="Description"
            />
          </div>
        </div>
        <div className="form-group mx-sm-3 row">
          <label
            htmlFor="book-title"
            className="col-mb-2 col-form-label text-truncate"
          >
            Author Name :
          </label>
          <div className="col-mb-2">
            <input
              type="text"
              onChange={onchangeAddbookHandler}
              className="form-control"
              id="AuthorName"
              name="AuthorName"
            />
          </div>
        </div>
        <div className="form-group mx-sm-3 row">
          <label
            htmlFor="book-title"
            className="col-mb-2 col-form-label label-text"
          >
            Number of Books Available:
          </label>
          <div className="col-mb-2">
            <input
              type="text"
              onChange={onchangeAddbookHandler}
              className="form-control"
              id="NoOfBooksAvailable"
              name="BooksAvailable"
            />
          </div>
        </div>
        <div className="form-group mx-sm-3 row">
          <div className="col-mb-2"></div>
          <div className="col-mb-2">
            <button
              type="button"
              className="btn btn-round btn-md btnnew"
              onClick={onSubmitAddBookHandler}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddBook;
