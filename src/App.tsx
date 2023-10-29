import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyAlert from "./MyAlert";
import LanguagePicker from "./LanguagePicker";

function App() {
  return (
    <div className="App">
        <LanguagePicker/>
      <MyAlert></MyAlert>
    </div>
  );
}

export default App;
