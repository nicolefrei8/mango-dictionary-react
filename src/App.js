import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <header className="AppHeader"> 
   Mango Dictionary
      </header>
      <div className="AppContainer">
        <Dictionary />
      </div>
     <footer>
        This project was coded by   <a
          href="mailto:nicolefrei8@gmail.com"
        >
         Nicole Frei. 
        </a>{" "}
        <a
          href="https://github.com/nicolefrei8/mango-dictionary-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://tubular-jalebi-f58d2d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}


