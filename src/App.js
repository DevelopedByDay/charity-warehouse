import React, {useState} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimalsLogo from '../src/assets/Animals.png';
import ArtsLogo from '../src/assets/Arts.png';
import CivilLibertiesLogo from '../src/assets/Civil-Liberties.png';
import CommunityLogo from '../src/assets/Community.png';
import EnvironmentalLogo from '../src/assets/Environmental.png';
import ReligionsLogo from '../src/assets/religions.png';
//import the style
import './App.css';


import SingleCategory from './components/SingleCategory';


function App() {

  const [categories] = useState([
    { 
      name: 'animals',
      icon: AnimalsLogo,
    },

    { name: 'arts',
      icon: ArtsLogo,
    },

    { name: 'civilRights',
      icon: CivilLibertiesLogo,
    },

    { name: 'community',
      icon: CommunityLogo,

    },

    { name: 'environmental',
      icon: EnvironmentalLogo,
    },

    { name: 'religion',
      icon: ReligionsLogo,
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState({name: 'default'});
  

  return (
    <div>
      <Header></Header>
      <Nav
      categories = {categories}
      setCurrentCategory = {setCurrentCategory}
      currentCategory = {currentCategory}
      ></Nav>
      <main>   
        <SingleCategory currentCategory = {currentCategory}></SingleCategory>
        
      </main>
      <footer>
       <Footer></Footer> 
      </footer>
      
    </div>
  );
}

export default App;
