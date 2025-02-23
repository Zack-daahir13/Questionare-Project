import React, { useState } from 'react';
import './BooksPage.css'; // Import CSS styling

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [categories] = useState([
    'Health & Medicine',
    'Technology & Innovation',
    'Economics & Business',
    'Education & Learning',
    'Environmental Studies',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleUpload = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/pdf, image/*';
    fileInput.click();

    fileInput.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) {
        alert('Please select a file!');
        return;
      }

      const title = prompt('Enter Book Title:');
      const author = prompt('Enter Author:');
      const type = prompt('Enter Book Type:');
      const price = prompt('Enter Price:');
      const category = prompt('Enter Category:', categories.join(', '));

      const newBook = {
        title,
        author,
        type,
        price,
        category,
        file,
        thumbnail: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : 'https://i.poweredtemplates.com/p/sp/103105/sp_slide_h_1.jpg',
          
      };

      setBooks([...books, newBook]);
    };
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  const handlePreview = (book) => {
    const fileURL = URL.createObjectURL(book.file);
    window.open(fileURL, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (book) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(book.file);
    link.download = book.title;
    link.click();
  };

  return (
    <div className="books-page">
      <div className="sidebars">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategory === category}
              />
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <button onClick={handleUpload} className="upload-button">
            Upload Book
          </button>
        </div>

        <div className="books-grid">
          {filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-image">
                <img src={book.thumbnail} alt={book.title} />
              </div>
              <div className="book-content">
                <div className="book-details">
                  <h4>{book.title}</h4>
                  <p>Type: {book.type}</p>
                  <p>Author: {book.author}</p>
                  <p>Price: {book.price}</p>
                  <p>Category: {book.category}</p>
                </div>
                <div className="actions">
                  <button onClick={() => handlePreview(book)}>Preview</button>
                  <button onClick={() => handleDownload(book)}>Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
