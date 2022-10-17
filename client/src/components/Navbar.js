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
    <div>
      <div className="container py-4">
        <Nav
          className="navbar fixed-top navbar-expand-lg bg-dark justify-content-center"
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link style={{color: 'white'}} href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: 'white'}} href="/createbooks">CREATE BOOK</Nav.Link>
          </Nav.Item>
          <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/genres">BOOK GENRE</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item> */}
          <button
            className="btn btn-info"
            type="submit"
            onClick={handleLogoutClick}
          >
            LOGOUT
          </button>
        </Nav>
      </div>
    </div>
  );
}

export default Navbar;
