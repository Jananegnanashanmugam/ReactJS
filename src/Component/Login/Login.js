import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emptyValues } from "../Helper/validation";
import { registervalidationlabel } from "../Helper/Constants";

function Login() {
  const navigation = useNavigate();
  const [getLoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [getLoginValidation, setLoginValidation] = useState({
    email: true,
    password: true,
  });
  const [getglobalLoginFlag, setglobalLoginFlag] = useState(false);
  const [validationMatch, setValidationMatch] = useState(false);

  const [getSubmitHandler, setSubmitHandler] = useState(false);

  useEffect(() => {
    setLoginValidation({
      email: emptyValues(getLoginForm.email),
      password: emptyValues(getLoginForm.password),
    });
  }, [getLoginForm]);

  useEffect(() => {
    if (
      getglobalLoginFlag &&
      !getLoginValidation.email &&
      !getLoginValidation.password
    ) {
      let email = sessionStorage.getItem("email");
      let password = sessionStorage.getItem("password");
      if (email == getLoginForm.email && password == getLoginForm.password) {
        navigation("/searchBook");
      } else {
        setValidationMatch(true);
      }
    }
  }, [getSubmitHandler]);

  const onChangeLogintextboxHandler = (event) => {
    setLoginForm({ ...getLoginForm, [event.target.name]: event.target.value });
  };
  const onSubmitLoginFormHandler = (event) => {
    event.preventDefault();
    setglobalLoginFlag(true);
    setSubmitHandler(!getSubmitHandler);
    setLoginValidation({
      email: emptyValues(getLoginForm.email),
      password: emptyValues(getLoginForm.password),
    });
  };

  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 loginscreen-margin">
              <form>
                <div className="form-control loginscreen margin-leftinput">
                  <Link className="navbar-brand" to=" ">
                    <img
                      className="image-margin"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nuvola_apps_bookcase.svg/240px-Nuvola_apps_bookcase.svg.png"
                      width="130px"
                      height="80px"
                    />
                  </Link>
                  <div className="Loginheadingscreen text-right">LIBRARY</div>
                  <div className="headingscreen12 text-right">
                    MANAGEMENT SYSTEM
                  </div>
                </div>
                <br />
                {getglobalLoginFlag && validationMatch && (
                  <div className="alert alert-danger" role="alert">
                    {registervalidationlabel.validationMatchEmailPassword}
                  </div>
                )}
                <div className="form-row">
                  <div className="col-4">
                    <label
                      htmlFor="UserName"
                      className="col-form-label text-left"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="col-4">
                    <span>
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control md-4 margin-forinputtype margin-loginleftinput"
                      id="userName"
                      name="userName"
                      onChange={onChangeLogintextboxHandler}
                    />
                    {getglobalLoginFlag && getLoginValidation.email && (
                      <div className="alert alert-danger" role="alert">
                        {registervalidationlabel.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-4">
                    <label
                      htmlFor="Password"
                      className="col-form-label text-left"
                    >
                      Password
                    </label>
                  </div>
                  <div className="col-4 md-8">
                    <span>
                      <i className="fa fa-key" aria-hidden="true"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control md-4 margin-forinputtype margin-loginleftinput"
                      id="password"
                      name="password"
                      onChange={onChangeLogintextboxHandler}
                    />
                    {getglobalLoginFlag && getLoginValidation.password && (
                      <div className="alert alert-danger" role="alert">
                        {registervalidationlabel.password}
                      </div>
                    )}
                  </div>
                </div>
                <br />
                <div className="form-row btnlogin">
                  <div className="col-4"></div>
                  <div className="col-4 md-8">
                    <button
                      type="submit"
                      className="btn btn-warning"
                      onClick={onSubmitLoginFormHandler}
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-4"></div>
                </div>
                <br />
              </form>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
