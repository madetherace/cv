import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import styles from '../App.module.css'; 

function UsersList() {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul className={styles.list}>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;