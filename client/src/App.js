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
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import SingleCategory from './components/SingleCategory';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Profile from '../src/pages/Profile';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {

  const [categories] = useState([
    { 
      name: 'animals',
      icon: AnimalsLogo,
    },

    { name: 'arts',
      icon: ArtsLogo,
    },

    { name: 'civil-rights',
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
    <ApolloProvider client = {client}>
      <Router>
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
        
        <div>
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Signup} />
          <Route exact path = '/profile/:username?' component = {Profile} />
        </div>
        
        <footer>
        <Footer></Footer> 
        </footer>
        
    </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
