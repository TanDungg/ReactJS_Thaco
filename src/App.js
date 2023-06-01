import React from 'react';
import TodoFeatures from './features/Todo'
import AlbumFeatures from './features/Album'
import './App.css';
import Color from './Color';

function App() {
  return (
    <div className='App'>
      <TodoFeatures />
      <AlbumFeatures />
      <Color />
    </div>
  );
}

export default App;
