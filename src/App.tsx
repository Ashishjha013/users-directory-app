import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

type Users = {
  id: number;

  login: {
    username: string;
  };

  name: {
    first: string;
    last: string;
  };

  email: string;

  picture: {
    large: string;
  };
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
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07111f] text-white text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <main className="app-shell">
      <div className="app-bg" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="title-text mb-4">Users Directory</h1>
          <p className="subtitle-text">Discover beautiful user profiles</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              image={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
              username={user.login.username}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
