import React from 'react'
import Home from './Home'

function  HomeContainer({books, removeBook}) {
  
  return (
    <div className="container py-5">
      <center>
      {books.map(book => {
        return (
          <Home key={book.id} book={book} removeBook ={removeBook} />
        )
        })}
      </center>
        
    </div>
  )
}
export default HomeContainer;