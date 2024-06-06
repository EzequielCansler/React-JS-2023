import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Main from "./Pages/Main";
import Details from "./Pages/Details";
import UserRegister from "./Pages/Register";
import Login from "./Login/Login";
import AddProduct from "./Pages/AddProduct";
import ModifyProduct from "./Pages/ModifyProduct";
import Container from "react-bootstrap/Container";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <h1 className="titleH1">CarEcommerce</h1>
          <Router>
            <NavBar />
            <Container>
              <Routes>
                <Route path="/Home" element={<Main />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details/:productId" element={<Details />} />
                <Route path="/AddProduct" element={<AddProduct />} />
                <Route
                  path="/product/modify/:productId"
                  element={<ModifyProduct />}
                />
              </Routes>
            </Container>
            <advertisingCarousel />
          </Router>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
