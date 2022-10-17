import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, Link,useNavigate} from 'react-router-dom';
import Reviews from './Reviews'
import ViewReviews from './ViewReviews'


export default function BookCard({removeBook}) {
    const [title, setTitle] = useState("")
    const [coverpage, setCoverpage] = useState("")
    const [description, setDescription] = useState("")
    const [bookurl, setBookurl] = useState("")
    const[book,setBook]=useState("")
    const [books, setBooks] = useState([]);
  
    let {id} = useParams()
    let navigate = useNavigate();
    const bookAPI ='/books'
//   const {title,coverpage, description, bookurl, book_id} = book
    const bookUrl = "/books/"+id
    const bookFetcher = () =>{
        fetch(bookUrl)
        .then(res => res.json())
           .then((data) => {
            console .log(data)
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

    function removeBook(bookToRemove) {
      setBook(books.filter(book => book.id !== bookToRemove.id))
    }
    

    function onDeleteClick(e) {
      e.preventDefault();
      fetch(`${bookAPI}/${id}`, {
        method: "DELETE",
      });
      removeBook(book);
      navigate(`/home`)
    }

  return (
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
              <h5 className="card-title">{book}</h5>
              <p className="card-text">{description}</p>
              <a href= {bookurl}>Read Full Book</a>
              <br/><br/>
              <button style={{margin: 15}} className='btn btn-warning'>
              <Link className='nav-link' to={'/editbook/'+ id}>Edit</Link>
              </button>
              
              <button className='btn btn-danger' onClick={onDeleteClick} >
                Delete
              </button>
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
