import { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const [transaction, setTransaction] = useState({
    book_id: "",
    quantity: "",
    type: "ADD"
  });

  const fetchTransactions = () => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const submitTransaction = async () => {
    await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    });

    alert("Transaction Added");

    setTransaction({
      book_id: "",
      quantity: "",
      type: "ADD"
    });

    fetchTransactions();
  };

  return (
    <div>
      <h1>Transaction Management</h1>

      <input
        type="number"
        placeholder="Book ID"
        value={transaction.book_id}
        onChange={(e) =>
          setTransaction({
            ...transaction,
            book_id: e.target.value
          })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        value={transaction.quantity}
        onChange={(e) =>
          setTransaction({
            ...transaction,
            quantity: e.target.value
          })
        }
      />

      <select
        value={transaction.type}
        onChange={(e) =>
          setTransaction({
            ...transaction,
            type: e.target.value
          })
        }
      >
        <option value="ADD">Add Stock</option>
        <option value="BORROW">Borrow Book</option>
      </select>

      <button onClick={submitTransaction}>
        Submit Transaction
      </button>

      <br />
      <br />

      <h2>Transaction History</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book ID</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.book_id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;