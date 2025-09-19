import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">User Profiles</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-md-4 mb-4">
              <UserCard
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                company={user.company.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
