import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


export default function BookCard() {
    const [title, setTitle] = useState("")
    const [coverpage, setCoverpage] = useState("")
    const [description, setDescription] = useState("")
    const [bookurl, setBookurl] = useState("")
  
    let {id} = useParams()
//   const {title,coverpage, description, bookurl, genre_id} = book
    const bookUrl = "/books/"+id
    const bookFetcher = () =>{
        fetch(bookUrl)
        .then(res => res.json())
           .then((data) => {
            console .log(data)
            console.log(data.books)
            const book = data
            

            setTitle(book.title)
            setCoverpage(book.coverpage)
            setDescription(book.description)
            setBookurl(book.bookurl)
           })
    }

    useEffect(
        bookFetcher,[]
    )

  return (
    <div className='details'>
    <div className ="container">
    <div className='scard' >
      
      <Card style={{height: 200 + 'px', width:200 + 'px',}}>
      <Card.Img variant="top" src={coverpage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <h6>{bookurl}</h6>
        {/* <Button variant="info">More ...</Button> */}
       
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  )
}
