import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const HelloWorld = (props) => <span>Hello {props.kicsoda}</span>

function App() {
  const [hex, setHex] = useState("#ffffff");
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div className="App">
      <HelloWorld kicsoda="Béla"></HelloWorld>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn" onClick={changeColor} style={{ backgroundColor: `${hex}` }}>Click me!</button>
        <p>Color code: {hex}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
