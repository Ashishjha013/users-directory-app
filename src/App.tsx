import { useState, useEffect } from 'react';
import './App.css';

type Users = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
};

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);

        const response = await fetch(
          'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10',
        );

        const data = await response.json();

        console.log(data);

        setUsers(data.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Users Directory</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
