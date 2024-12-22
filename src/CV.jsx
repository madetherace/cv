import React from 'react';
import './App.css';
import notionImage from './img/notion.png';
import lamodaImage from './img/lamoda.png';
import apiImage from './img/api.png';
const CV = () => {
  return (
    <div className="container">
      <h1>Сосновский Глеб</h1>
      <h2>Web-Developer</h2>
      <div className="contact-info">
        <p><strong>Местоположение:</strong> Минск</p>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:glebsosnovskiy@gmail.com"> glebsosnovskiy@gmail.com</a>
        </p>
        <p>
          <strong>Соцсети:</strong> 
          <a href="https://t.me/madetherace" target="_blank" rel="noopener noreferrer">@madetherace</a>
        </p>
      </div>

      <div className="section">
        <h3>Обо мне</h3>
        <p>
          Специализируюсь в области веб-разработки. Имею опыт работы с различными технологиями, включая React, Node.js, и другими современными инструментами фронтенд-разработки. Стремлюсь к созданию качественных и эффективных веб-приложений.
        </p>
      </div>

      <div className="section">
        <h3>Опыт работы</h3>
        <ul>
          <li>
            <strong>Front-End Developer</strong> — Freelance (2023 - Настоящее время)<br />
            Последние 2 года я специализировался на веб-разработке с использованием HTML, CSS и JavaScript для создания адаптивных и визуально привлекательных веб-сайтов.
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Образование</h3>
        <p><strong>Веб-программирование и интернет-технологии</strong> — БГУ (2023 - Настоящее время)</p>
      </div>

      <div className="section">
        <h3>Навыки</h3>
        <div className="skills">
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
          <span>Figma</span>
          <span>C++</span>
          <span>SQL</span>
        </div>
      </div>

      <div className="section">
        <h3>Языки</h3>
        <div className="languages">
          <span>Русский (родной)</span>
          <span>Английский (B2)</span>
        </div>
      </div>

      <div className="section">
        <h3>Проекты</h3>
        <ul>
          <li>
            <strong>Notion</strong>
            <p>Многопользовательское приложение для ведения заметок.
Каждый пользователь может создать, удалить и редактировать свои
заметки. </p>
<img src={notionImage} alt="notion" className="project-image" /> <br />
            <a href="https://github.com/madetherace/notion" target="_blank" rel="notion">Ссылка на код</a>
            <p>Технологии: React + Vite</p> 
          </li>
          <li>
             <strong>Lamoda</strong>
            <p>Интернет-магазин с возможностью фильтрации и сортировки
продуктов.</p>
<img src={lamodaImage} alt="lamoda" className="project-image" /> <br />
            <a href="https://github.com/madetherace/lamoda" target="_blank" rel="lamoda">Ссылка на код</a>
            <p>Технологии: React</p> 
          </li>
          <li>
             <strong>API & SPA</strong>
            <p>Многостраничное приложение, используя внешний API и
библиотеку react-router-dom.</p>
<img src={apiImage} alt="api" className="project-image" /> <br />
            <a href="https://github.com/madetherace/api" target="_blank" rel="api">Ссылка на код</a>
            <p>Технологии: React</p> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CV;