import React, { useState, useEffect } from 'react';
import HomeContainer from './HomeContainer'
import BookForm from '../BookForm';

export default function  HomeCard() {

    const [books, setBooks] = useState([]);
    // const booksToDisplay = books.all

    useEffect(() => {
    fetch("/books")
    .then(res => res.json())
    .then(data => setBooks(data))
}, []);

function addBook(newBook) {
  setBooks([...books, newBook]);
}

function removeBook(bookToRemove) {
  setBooks(books.filter(book => book.id !== bookToRemove.id))
}

function handleUpdateItem(updatedItem) {
  const updatedItems = books.map((item) => {
    if (item.id === updatedItem.id) {
      return updatedItem;
    } else {
      return item;
    }
  });
  setBooks(updatedItems);
}

// console.log(data)

  return (
    <div className='bookapp'>
      <div className='sidebar'>
       <BookForm addBook = {addBook}/>
      </div>
      <HomeContainer
          books={books}
        />
    </div>
    
  )
}
