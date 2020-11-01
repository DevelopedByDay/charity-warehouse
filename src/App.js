import React, {useState} from 'react';
import Nav from './components/Nav';
import './App.css';

import SingleCategory from './components/SingleCategory';


function App() {

  const [categories] = useState([
    { name: 'animals'},
    { name: 'arts'},
    { name: 'civil-rights'},
    { name: 'community'},
    { name: 'environmental'},
    { name: 'religion'}
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    <div>
      <Nav
      categories = {categories}
      setCurrentCategory = {setCurrentCategory}
      currentCategory = {currentCategory}
      ></Nav>
      <main>
        <SingleCategory currentCategory = {currentCategory}></SingleCategory>
      </main>

    </div>
  );
}

export default App;
