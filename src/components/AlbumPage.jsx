import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import styles from '../App.module.css'; 

function AlbumPage() {
  const { id } = useParams();
  const { data: album, loading: albumLoading, error: albumError } = useFetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const [photos, setPhotos] = useState([]);
  const [photosLoading, setPhotosLoading] = useState(true);
  const [photosError, setPhotosError] = useState(null);
  const { data: user, loading: userLoading, error: userError } = useFetch(album ? `https://jsonplaceholder.typicode.com/users/${album.userId}` : null);

  useEffect(() => {
    let isMounted = true;

    const fetchPhotos = async () => {
      if (!id) {
        setPhotosLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setPhotos(data);
          setPhotosLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setPhotosError(error);
          setPhotosLoading(false);
        }
      }
    };

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (albumLoading || photosLoading || userLoading) return <p>Загрузка...</p>;
  if (albumError || photosError || userError) return <p>Ошибка: {albumError?.message || photosError?.message || userError?.message}</p>;

  return (
    <div className={styles.albumContainer}>
      <h1 className={styles.albumTitle}>{album.title}</h1>
      {user && <p className={styles.albumAuthor}>Created by: <Link to={`/users/${user.id}`}>{user.name}</Link></p>}

      <div className={styles.albumGrid}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;