import React, { useState, useEffect } from 'react';
import HomeContainer from './HomeContainer'
import Navbar from '../Navbar';

export default function  HomeCardNew() {

    const [books, setBooks] = useState([]);
    // const booksToDisplay = books.all

    useEffect(() => {
    fetch("/homebooks")
    .then(res => res.json())
    .then(data => setBooks(data))
}, []);

// console.log(data)

  return (
    <div>
    <HomeContainer
        books={books}
    />
    </div>
  )
}
