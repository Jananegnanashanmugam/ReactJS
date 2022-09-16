import "./EditBook.css";
import { Link } from "react-router-dom";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

function EditBook() {
  const [getAllFormDetails, setAllFormDetails] = useState([]);
  const [getEditId, setEditId] = useState(-1);
  const [getDeleteId, setDeleteId] = useState(-1);
  const [getEditFormDetails, setEditFormDetails] = useState({
    BookId: 0,
    BookTitle: "",
    Description: "",
    AuthorName: "",
    totalBooksCount: 0,
    BooksAvailable: 0,
    ISBNNo: "",
  });
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:3000/Books")
      .then((result) => {
        console.log(result.data);
        let elems = result.data;
        elems.sort((a, b) => a.id - b.id);
        setAllFormDetails(elems);
        let last = elems.slice(-1)[0].id;
        console.log(last.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const oniconEditPencilHandler = (index, id) => {
    let edititemid = id;
    setEditId(edititemid);

    console.log(getAllFormDetails);
    let neweditform = getAllFormDetails.find((x) => x.id === edititemid);
    setEditFormDetails({
      BookId: neweditform.BookId,
      BookTitle: neweditform.BookTitle,
      Description: neweditform.Description,
      AuthorName: neweditform.AuthorName,
      totalBooksCount: neweditform.totalBooksCount,
      BooksAvailable: neweditform.BooksAvailable,
      ISBNNo: neweditform.ISBNNo,
    });
  };
  const onmodalinputtextHandler = (event) => {
    setEditFormDetails({
      ...getEditFormDetails,
      [event.target.name]: event.target.value,
    });
  };
  const oniconDeleteHandler = (id) => {
    setDeleteId(id);
  };

  const onDeleteHandler = () => {
    axios
      .delete("http://localhost:3000/Books/" + getDeleteId)
      .then(() => {
        fetchdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onUpdateHandler = () => {
    axios
      .patch("http://localhost:3000/books/" + getEditId, getEditFormDetails)
      .then(() => {
        fetchdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navitem-margin">
        <Link className="navbar-brand" to="">
          <img
            src="https://www.clipartkey.com/mpngs/m/36-364919_nuvola-apps-bookcase-library-management-system-logo-png.png"
            width="20"
            height="30"
            alt=""
          />
        </Link>
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
            <li className="nav-item active">
              <Link className="nav-link" to="/aboutPage">
                About Library
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="">
                Rules and Regulation
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to=" ">
                Price Card
              </Link>
            </li>
            <li className="nav-item active navcolor">
              <Link className="nav-link padding-header" to="/searchBook">
                Search
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/addBook">
                Add Book
              </Link>
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
              id="BooktitleId"
              name="booktitlesearch"
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getAllFormDetails.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{obj.BookId}</td>
                    <td>{obj.BookTitle}</td>
                    <td>{obj.Description}</td>
                    <td>{obj.AuthorName}</td>
                    <td>{obj.BooksAvailable}</td>

                    <td>
                      <i
                        className="fa fa-pencil"
                        onClick={() => oniconEditPencilHandler(index, obj.id)}
                        aria-hidden="true"
                        data-toggle="modal"
                        data-target="#exampleEditDialog"
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fa fa-trash"
                        onClick={() => oniconDeleteHandler(obj.id)}
                        aria-hidden="true"
                        data-toggle="modal"
                        data-target="#exampleDeleteDialog"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleDeleteDialog"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleDeleteDialogTitle">
                Confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure want to delete this item?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDeleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleEditDialog"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleEditDialogTitle">
                Edit Book
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
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
                      className="form-control"
                      id="bookid"
                      name="ISBNNo"
                      value={getEditFormDetails.ISBNNo}
                      onChange={onmodalinputtextHandler}
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
                      className="form-control"
                      id="booktitle"
                      name="BookTitle"
                      value={getEditFormDetails.BookTitle}
                      onChange={onmodalinputtextHandler}
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
                      className="form-control"
                      id="book-desc"
                      name="Description"
                      value={getEditFormDetails.Description}
                      onChange={onmodalinputtextHandler}
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
                      className="form-control"
                      id="AuthorName"
                      name="AuthorName"
                      value={getEditFormDetails.AuthorName}
                      onChange={onmodalinputtextHandler}
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
                      className="form-control"
                      id="NoOfBooksAvailable"
                      name="BooksAvailable"
                      value={getEditFormDetails.BooksAvailable}
                      onChange={onmodalinputtextHandler}
                    />
                  </div>
                </div>
                {/* <div className="form-group mx-sm-3 row">
                  <div className="col-mb-2"></div>
                  <div className="col-mb-2">
                    <button
                      type="button"
                      className="btn btn-round btn-md btnnew"
                    >
                      Add Book
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onUpdateHandler}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
