import React from 'react'
// import Books from './Books'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import HomeCard from './home/ HomeCard';


function Home () {

    
    return(
        <div>
            {/* <Container>
                <Container>
                    <header>Home</header>
                    <h5>Here are some books worth reading</h5>
                </Container>
            </Container> */}
            
            {/* <Books/> */}
            <HomeCard/>
        </div>
    )
}

export default Home