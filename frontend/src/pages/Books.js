import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    quantity: ""
  });

  const fetchBooks = () => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async () => {
    await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });

    alert("Book Added");

    setBook({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      quantity: ""
    });

    fetchBooks();
  };

  return (
    <div>
      <h1>Book Management</h1>

      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) =>
          setBook({ ...book, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) =>
          setBook({ ...book, author: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Genre"
        value={book.genre}
        onChange={(e) =>
          setBook({ ...book, genre: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="ISBN"
        value={book.isbn}
        onChange={(e) =>
          setBook({ ...book, isbn: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        value={book.quantity}
        onChange={(e) =>
          setBook({ ...book, quantity: e.target.value })
        }
      />

      <button onClick={addBook}>
        Add Book
      </button>

      <br />
      <br />

      <h2>Available Books</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.isbn}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;