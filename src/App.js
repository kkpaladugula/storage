import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Components/Book';
import BookDetail from './Components/BookDetail';
import icon from "./Components/icon.svg";
// import pic1 from "./Components/pic1.svg";
import pic2 from "./Components/pic2.svg";
import pic3 from "./Components/pic3.svg";
import pic4 from "./Components/pic4.svg"

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch initial book data for Harry Potter and Sherlock Holmes
  useEffect(() => {
    fetchBooks('harry+potter');
    fetchBooks('sherlock+holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const booksData = response.data.items;
      setBooks((prevBooks) => [...prevBooks, ...booksData]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchBooks(searchQuery);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      {/* Navbar with search feature */}
      <div className='nav'> 
      <div className='nav-first'>
       <img src={icon} alt="icon1"/>
       <span>KeazoNBOOKS</span>
       </div>
       <div className='nav-sec'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button onClick={handleSearch}>Search</button>
        </div>
        <div className='nav-icons'>
        <img src={pic4} alt="icon"/>
        <img src={pic3} alt ="icon"/>
        <img src={pic2} alt="icon"/>
        <img src={pic2} alt="icon"/>
        </div>
      </div>
       <div className="book-details">
      {selectedBook && <BookDetail book={selectedBook} />}
      </div>
      {/* List of books */}
      <div className='book-list'>
        {books.map((book) => (
          <Book key={book.id} book={book} onClick={() => handleBookClick(book)} />
        ))}
      </div>

      {/* Detailed Book Information */}
      {/* {selectedBook && <BookDetail book={selectedBook} />} */}
    </div>
  );
};

export default App;