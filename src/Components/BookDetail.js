import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="details">
      {/* Add other detailed book information like author, description, etc. */}
      <img id="img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <div className='title'>
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.description}</p>
      <div>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now!</a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
      </div>
    </div>
  );
};

export default BookDetail;