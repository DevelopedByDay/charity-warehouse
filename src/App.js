//this grabs all the component sections for reuse
import React from 'react';
import Nav from './components/Nav';
//import the style
import './App.css';
//import all th components
import AnimalList from './components/animal';
import ReligionList from './components/religion';
import CommDevList from './components/community';
import ArtsList from './components/arts';
import civilRightsList from './components/civil-rights';
import environmentalList from './components/environmental';

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
