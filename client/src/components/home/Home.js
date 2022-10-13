import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home({book}) {
  
  const {title,coverpage, description, bookurl, genre_id} = book
  return (
    <div className ="container">
    <div className='scard' >
      {/* <div className='scard'>
      <div className="cards">
      <div className="card" style={{width: 18 + 'rem', height: 400 + 'px'}}>
          <img src={coverpage} className="card-img-top" alt={title}/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btnf btn-primary">Go somewhere</a>
              <button>
                  View more
              </button>
          </div>
          </div>
      </div>
      </div> */}
      <Card style={{height: 200 + 'px', width:200 + 'px',}}>
      <Card.Img variant="top" src={coverpage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">More ...</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
