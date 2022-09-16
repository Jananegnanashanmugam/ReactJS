import "./Register.css";

import Header from "../Header/Header";
import "../../Assets/CSSFontAwesome/fontawesome/css/fontawesome.min.css";
import { useState, useEffect } from "react";
import { registervalidationlabel } from "../Helper/Constants";
import { emptyValues } from "../Helper/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigation = useNavigate();
  const [getForm, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    usertype: "non-admin",
    userId: 0,
  });
  const [getglobalFlag, setglobalFlag] = useState(false);

  const [getFormValidation, setFormValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
  });

  useEffect(() => {
    if (
      !getFormValidation.firstName &&
      !getFormValidation.lastName &&
      !getFormValidation.email &&
      !getFormValidation.password
    ) {
      sessionStorage.setItem("email", getForm.email);
      sessionStorage.setItem("password", getForm.password);
      fetchuserlist();

      //navigation("login");
    }
  }, [getFormValidation]);
  const fetchuserlist = () => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        console.log(result.data);
        let elems = result.data;
        elems.sort((a, b) => a.id - b.id);
        let last = elems.slice(-1)[0].id;

        //setUserId(last + 1);
        let adduservalues = {
          ...getForm,
          userId: parseInt(last + 1),
        };
        //setAddBookForm([...getAddBookForm, { bookid: bookID }]);
        setForm(adduservalues);
        axios
          .post("http://localhost:3000/users", getForm)
          .then(() => {
            console.log("Item created successfully");
            navigation("login");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const onchangeinputHandler = (event) => {
    setForm({ ...getForm, [event.target.name]: event.target.value });
  };

  const onSignUpButtonHandler = (event) => {
    event.preventDefault();
    setglobalFlag(true);
    setFormValidation({
      firstName: emptyValues(getForm.firstName),
      lastName: emptyValues(getForm.lastName),
      email: emptyValues(getForm.email),
      password: emptyValues(getForm.password),
    });
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 container-margin">
            <form>
              <div className="headingscreen">
                <h3>Sign Up</h3>
              </div>

              <div className="form-group first-label">
                <label>First Name</label>
                <input
                  type="text"
                  onChange={onchangeinputHandler}
                  className="form-control margin-leftinput"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />

                {getglobalFlag && getFormValidation.firstName && (
                  <div className="alert alert-danger" role="alert">
                    {registervalidationlabel.firstnameEmpty}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={onchangeinputHandler}
                  className="form-control margin-leftinput"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
                {getglobalFlag && getFormValidation.lastName && (
                  <div className="alert alert-danger" role="alert">
                    {registervalidationlabel.lastNameEmpty}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  onChange={onchangeinputHandler}
                  className="form-control margin-leftinput"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
                {getglobalFlag && getFormValidation.email && (
                  <div className="alert alert-danger" role="alert">
                    {registervalidationlabel.EmailAddressEmpty}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={onchangeinputHandler}
                  className="form-control margin-leftinput"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                />
                {getglobalFlag && getFormValidation.password && (
                  <div className="alert alert-danger" role="alert">
                    {registervalidationlabel.PasswordEmpty}
                  </div>
                )}
              </div>

              <button
                type="submit"
                onClick={onSignUpButtonHandler}
                className="btn btn-round btn-md margin-leftbtn"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
export default Register;
