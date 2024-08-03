import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl">Dashboard</h1>
      {user ? (
        <p className="mt-4">Welcome, {user.name}!</p>
      ) : (
        <p className="mt-4">You are not logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
