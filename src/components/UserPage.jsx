import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import styles from '../App.module.css'; 

function UserPage() {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const { data: albums } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div className={styles.userPage}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Site: {user.website}</p>
      <h2>Альбомы</h2>
      <ul>
        {(albums || []).map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;