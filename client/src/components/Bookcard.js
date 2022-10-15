import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews'
import ViewReviews from './ViewReviews'


export default function BookCard() {
    const [title, setTitle] = useState("")
    const [coverpage, setCoverpage] = useState("")
    const [description, setDescription] = useState("")
    const [bookurl, setBookurl] = useState("")
    const[genre,setGenre]=useState("")
  
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
    // <div className='details'>
    // <div className ="container">
    // <div className='scard' >

    //   <Card style={{height: 200 + 'px', width:200 + 'px',}}>
    //   <Card.Img variant="top" src={coverpage} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>
           
    //     </Card.Text>
        
    //     {/* <Button variant="info">More ...</Button> */}
       
    //   </Card.Body>
    // </Card>
    // <br/>
    // <br/>
    
    // </div>
    // </div>
    // {description}
    // <br/>
    // <a href= {bookurl}>READ</a>
    //     {/* <h6>{bookurl}</h6> */}
    //     <br/>
    //     <Reviews />
    //   <div className="container">
    //     <ViewReviews />
    //   </div>
    // </div>

    <center>
    <div className="container py-5">
      <h2>Book Details</h2>
      <div className="card mb- h-100 shadow">
        <div className="row g-1">
          <div className="col-md-4">
            <img src={coverpage} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 h-100 shadow">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              {/* <h5 className="card-title">Author</h5> */}
              <h5 className="card-title">{genre}</h5>
              <p className="card-text">{description}</p>
              <a href= {bookurl}>READ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Reviews />
    <div className="container">
      <ViewReviews />
    </div>
  </center>
  )
}
