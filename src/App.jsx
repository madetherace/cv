import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import AlbumsList from './components/AlbumsList';
import AlbumPage from './components/AlbumPage';
import HomePage from './components/HomePage'; 
import NotFound from './components/NotFound';
import styles from './App.module.css'; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/albums" element={<AlbumsList />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className={styles.footer}> 
        <p>Created by: Gleb Sosnovskiy</p>
        <p>BSU: 2024</p>
      </footer>
    </Router>
  );
}

export default App;