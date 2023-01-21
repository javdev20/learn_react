import './App.css';
import booksdb from './booksdb.js';
import Book from "./Book.js"

const App = () => {
  return (
    <div className="app-container">
      <div className="app-title">Great Books</div>
      {booksdb.map(book => (
        <Book 
          title={book.title} 
          author={book.author} 
          key={book.id} 
        />
      ))}
    </div>
  );
}

export default App;
