import React from "react";
import { NavLink, Link } from "react-router-dom";
// import Books from './Books'
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }



  return (
    <div className= "container">
         <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/createbooks">Create book</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/genres"> Book Genre</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>    */}
            <button  type="submit" className="btn btn-info" onClick={handleLogoutClick}>Logout</button>   
          </Nav>

      {/* <div className="py-4 ">
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container" activeKey="/home">
            <Link
              className="navbar-brand"
              style={{ color: "white", fontSize: 28 }}
              to="/"
            >
              Light Reader
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto" style={{ fontSize: 16 }}>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    style={{ color: "white" }}
                    aria-current="page"
                    to="/home"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    style={{ color: "white" }}
                    aria-current="page"
                    to="/createbooks"
                  >
                    CREATE BOOK
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-primary" onClick={handleLogoutClick} type="submit">
                  LOGOUT
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div> */}


      {/* <div className="container">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/createbooks">Create book</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <button className="btn btn-info" type="submit" onClick={handleLogoutClick}>
          Logout
        </button>
      </Nav>
      </div> */}

     
    </div>
  );
}

export default Navbar;
