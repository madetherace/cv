import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import styles from '../App.module.css'; 

function AlbumsList() {
  const { data: albums, loading, error } = useFetch('https://jsonplaceholder.typicode.com/albums');

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul className={styles.list}>
      {albums.map(album => (
        <li key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AlbumsList;