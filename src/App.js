import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Color from './Color';
import AlbumFeatures from './features/Album';
import TodoFeatures from './features/Todo';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <NavLink to="/todos" activeClassName="active-menu" exact>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" activeClassName="active-menu" exact>
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to="/colors" activeClassName="active-menu" exact>
            Colors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <h1>
        THACO TRƯỜNG HẢI</h1>
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
