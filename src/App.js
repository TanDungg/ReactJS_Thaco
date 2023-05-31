import React from 'react';
import ColorBox from './ColorBox.js';
import './App.css';

export default function App() {
  return (
    <section>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <ColorBox color="yellow"></ColorBox>
      <ColorBox color="green"></ColorBox>
    </section>
  )
}
