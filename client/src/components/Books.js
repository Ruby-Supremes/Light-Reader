import { title } from 'process'
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Bookcard from './Bookcard'

function Books () {

    const [selectBooks, setSelectBooks] = useState([])

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        // .then(console.log)
        // .then(setSelectBooks)
    },[])

    // let cards = selectBooks.map((selectBook) => (<Bookcard title={title} image={image} description={description} />))

    return(
        <div>
            <Container>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant={image} src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read more...</Button>
                </Card.Body>
            </Card>
        </Container>

            {/* {cards} */}
            

        </div>
    )
}

export default Books;
