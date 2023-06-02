import React, { useEffect } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import "./App.css";
import Color from "./features/Color/Color";
import AlbumFeatures from "./features/Album";
import TodoFeatures from "./features/Todo";
import DeviceManagement from "./features/QuanLyThietBiCNTT";
import DangNhap from "./features/DangNhap";
import NotFound from "./features/NotFound";
import userApi from "./api/userApi";

function App() {
  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await userApi.getAll();
      console.log(userList);
    };
    fetchUsers();
  });
  return (
    <div className="App">
      <header>
        <h1>THACO TRƯỜNG HẢI</h1>
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/albums">Albums</NavLink>
            </li>
            <li>
              <NavLink to="/colors">Colors</NavLink>
            </li>
            <li>
              <NavLink to="/devicemanagers">Quản lý thiết bị CNTT</NavLink>
            </li>
            <li>
              <NavLink to="/dangnhaps">Đăng nhập</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="div-thaco">
        <Routes>
          <Route path="/todos" element={<TodoFeatures />} />
          <Route path="/albums" element={<AlbumFeatures />} />
          <Route path="/colors" element={<Color />} />
          <Route path="/devicemanagers" element={<DeviceManagement />} />
          <Route path="/dangnhaps" element={<DangNhap />} />
          <Route Component={NotFound} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
