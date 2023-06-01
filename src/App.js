import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Color from './Color';
import AlbumFeatures from './features/Album';
import TodoFeatures from './features/Todo';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className={activeItem === 'todos' ? 'active' : ''}>
          <Link to="/todos" onClick={() => handleItemClick('todos')}>
            Todos
          </Link>
        </li>
        <li className={activeItem === 'albums' ? 'active' : ''}>
          <Link to="/albums" onClick={() => handleItemClick('albums')}>
            Albums
          </Link>
        </li>
        <li className={activeItem === 'colors' ? 'active' : ''}>
          <Link to="/colors" onClick={() => handleItemClick('colors')}>
            Colors
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <h1>THACO TRƯỜNG HẢI</h1>
      <Menu />
      <Routes>
        <Route path="/todos" element={<TodoFeatures />} />
        <Route path="/albums" element={<AlbumFeatures />} />
        <Route path="/colors" element={<Color />} />
      </Routes>
    </div>
  );
}

export default App;
