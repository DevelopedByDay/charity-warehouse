import React from 'react';
import Nav from './components/Nav';
import './App.css';
import AnimalList from './components/animal';
import ReligionList from './components/religion';
import CommDevList from './components/community';


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
