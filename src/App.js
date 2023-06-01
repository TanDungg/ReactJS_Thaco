import React from 'react';
import { Route, NavLink, Routes, Link } from 'react-router-dom';
import './App.css';
import Color from './Color';
import AlbumFeatures from './features/Album';
import TodoFeatures from './features/Todo';
import Login from './features/DangNhap';
import DeviceManagement from './QuanLyThietBiCNTT';

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
          <NavLink to="/albums" exact>
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to="/colors" exact>
            Colors
          </NavLink>
        </li>
        <li>
          <NavLink to="/devicemanagers" exact>
            Quản lý thiết bị CNTT
          </NavLink>
        </li>
        <li>
          <NavLink to="/dangnhaps" exact>
            Đăng nhập
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/" exact>
            THACO TRƯỜNG HẢI
          </Link>
        </h1>
        <Menu />
      </header>
      <body className='body-thaco'>
        <Routes>
          <Route path="/todos" element={<TodoFeatures />} />
          <Route path="/albums" element={<AlbumFeatures />} />
          <Route path="/colors" element={<Color />} />
          <Route path="/devicemanagers" element={<DeviceManagement />} />
          <Route path="/dangnhaps" element={<Login />} />
        </Routes>
      </body>
    </div>
  );
}
export default App;
