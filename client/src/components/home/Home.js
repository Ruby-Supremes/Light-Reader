import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home({book}) {
  
  const {title,coverpage, description, bookurl, genre_id} = book
  return (
    <div className ="container">
    <div className='scard' >
      
      <Card style={{height: 200 + 'px', width:200 + 'px',}}>
      <Card.Img variant="top" src={coverpage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
      
        </Card.Text>
        <Button variant="info">More ...</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
