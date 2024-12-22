import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css'; 

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>404 - Страница не найдена</h2>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;