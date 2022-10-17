import React from 'react'
import Home from './Home'

function  HomeContainer({books, removeBook}) {
  
  return (
    <div className="container">
      {books.map(book => {
        return (
          <Home key={book.id} book={book} removeBook ={removeBook} />
        )
        })}
        
    </div>
  )
}
export default HomeContainer;