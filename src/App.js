import React from 'react';
import Nav from './components/Nav';
import './App.css';
import AnimalList from './components/animal';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AnimalList></AnimalList>
      </main>

    </div>
  );
}

export default App;
