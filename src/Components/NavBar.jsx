import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthContext } from "../Context/AuthContext";

export default function NavBar() {
  const { login, handleLogout, user } = useAuthContext();
  return (
    <>
      <Navbar className="navBar">
        <Navbar.Brand as={Link} to="Home">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!login && (
              <>
                <Nav.Link className="user" as={Link} to="/Login">
                  Log In
                </Nav.Link>
                <Nav.Link className="user" as={Link} to="/Register">
                  Sing Up
                </Nav.Link>
              </>
            )}

            {login && (
              <>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/AddProduct">
                    AddProduct
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleLogout(false)}
                    as={Link}
                    to="/login"
                  >
                    Log out
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {login && <div>{user.name}</div>}
      </Navbar>
    </>
  );
}
