import React, { useState, useEffect } from 'react';
import HomeContainer from './HomeContainer'

export default function  HomeCard() {

    const [books, setBooks] = useState([]);
    // const booksToDisplay = books.all

    useEffect(() => {
    fetch("/homebooks")
    .then(res => res.json())
    .then(data => setBooks(data))
}, []);

// console.log(data)

  return (
    <HomeContainer
        books={books}
      
    />
  )
}
