import { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';

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
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1 className="title">Users Directory</h1>

      <p className="subtitle">Discover and connect with amazing people</p>

      <div className="users-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
