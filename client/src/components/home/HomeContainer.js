import React from 'react'
import Home from './Home'

function  HomeContainer({books}) {
  
  return (
    <div className="container py-5">
      <center>
      {books.map(book => {
        return (
          <Home key={book.id} book={book} />
        )
        })}
      </center>
        
    </div>
  )
}
export default HomeContainer;