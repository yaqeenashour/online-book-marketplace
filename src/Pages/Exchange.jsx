// src/pages/Exchange.jsx
import React from 'react';
import BookCard from '../components/BookCard';
import { books } from '../data/data';

const Exchange = ({ showDetails }) => {
  const exchangeBooks = books.filter(b => b.exchange);
  
  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1>Book Exchange</h1>
        <p className="text-muted">Connect with fellow readers and swap books.</p>
      </div>
      <div className="row">
        {exchangeBooks.map(book => <BookCard key={book.id} book={book} onClick={() => showDetails(book)} />)}
      </div>
    </div>
  );
};

export default Exchange;
