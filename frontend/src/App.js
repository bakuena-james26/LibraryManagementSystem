import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Users from "./pages/Users";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/books">Books</Link>
        <Link to="/users">Users</Link>
        <Link to="/transactions">Transactions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;