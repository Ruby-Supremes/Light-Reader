import React from 'react'
// import Books from './Books'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import HomeCard from './home/HomeCard';
import Navbar from './Navbar';


function Home () {

    
    return(
        <div className='container'>
            <center>
            <HomeCard/>
            </center>
        </div>
    )
}

export default Home