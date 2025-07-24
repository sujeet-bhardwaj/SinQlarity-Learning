import { useState, useEffect } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // Run only once on mount

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User