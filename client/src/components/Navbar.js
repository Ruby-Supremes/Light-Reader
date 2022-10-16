import React from 'react'
// import Books from './Books'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

function Navbar({user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
  return (

    <div>
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
            <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>   
            <button  type="submit" onClick={handleLogoutClick}>Logout</button>   
      </Nav>
    </div>
  )
}

export default Navbar