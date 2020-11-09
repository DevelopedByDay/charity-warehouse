
import logo from '../../assets/cover/giving-logo.png';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Profile from '../../pages/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//import logo from '../../assets/hero.jpg';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
    return (
    
    <header className="flex-row px-1">
      <div className = "flex-row px-1">
            <h2 className="flex-row px-1 center">
                <Link to = '/'>
                <a data-testid="link" href = '/'><div className = "logo flex-row"><img src={logo} alt = 'logo'/></div></a>
                 </Link>
                <p className="motto flex-row">Intelligent philanthropy.</p>
            </h2>
            <nav className="loginSignup">
              <div className="loginSignupButtons">
                {Auth.loggedIn() ? (
                <>
                  <Link to = '/Profile' class="button">My Charities</Link>
                  <a href = '/' onClick = {logout} class="button">Logout</a>
                </>
              ) : (
                <>
                <Link to = '/login' class="button login">Login</Link>
                <Link to = '/signup' class="button signup">Signup</Link>
                </>
              )}
              </div>
              <div className="loginSignupForm">
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Signup} />
          <Route exact path = '/profile/:username?' component = {Profile} />
        </div>
            </nav>
            
      </div>     
    </header>
    
  );
};

export default Header;