import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    membership_id: "",
    role: "",
    username: "",
    password: ""
  });

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    alert("User Added");

    setUser({
      name: "",
      membership_id: "",
      role: "",
      username: "",
      password: ""
    });

    fetchUsers();
  };

  return (
    <div>
      <h1>User Management</h1>

      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Membership ID"
        value={user.membership_id}
        onChange={(e) =>
          setUser({
            ...user,
            membership_id: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Role"
        value={user.role}
        onChange={(e) =>
          setUser({ ...user, role: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value
          })
        }
      />

      <button onClick={addUser}>
        Add User
      </button>

      <br />
      <br />

      <h2>Registered Users</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Membership ID</th>
            <th>Role</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.membership_id}</td>
              <td>{user.role}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;