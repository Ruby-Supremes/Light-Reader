import React from 'react'
import Home from './Home'

function  HomeContainer({books}) {
  
  return (
    <div className="container">
      {books.map(book => {
        return (
          <Home
            key={book.id} 
            book={book}  
          />
        )
        })}
        
    </div>
  )
}
export default HomeContainer