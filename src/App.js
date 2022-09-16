import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AboutPage from "./Component/AboutPage/AboutPage";
import AddBook from "./Component/AddBook/AddBook";
import EditBook from "./Component/EditBook/EditBook";
import SearchBook from "./Component/SearchBook/SearchBook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="aboutPage" element={<AboutPage />}></Route>
          <Route path="addBook" element={<AddBook />}></Route>
          <Route path="editBook" element={<EditBook />}></Route>
          <Route path="searchBook" element={<SearchBook />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
