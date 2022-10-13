import React from 'react'
import Books from './Books'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


function Home () {

    return(
        <div>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Create book</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            
      </Nav>
            
            <Container>
                <Container>
                    <header>Home</header>
                    <h5>Here are some books worth reading</h5>
                </Container>
            </Container>
            
            <Books/>
        </div>
    )
}

export default Home