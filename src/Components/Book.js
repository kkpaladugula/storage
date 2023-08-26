import React from 'react';

const Book = ({ book, onClick }) => {
  return (

    <div className="row"onClick={onClick}>
    
      {/* Display book information based on the Figma design */}
      {/* <h2 id="title">{book.volumeInfo.title}</h2> */}
      {/* Add other book information like author, image, etc. */}
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </div>

  );
};

export default Book;