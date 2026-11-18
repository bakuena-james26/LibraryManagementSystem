import { useEffect, useState } from "react";

function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Library Dashboard</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td
                className={
                  book.quantity < 2
                    ? "low-stock"
                    : "available"
                }
              >
                {book.quantity < 2
                  ? "Low Stock"
                  : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;