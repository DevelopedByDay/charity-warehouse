
import logo from '../../assets/cover/giving-logo.png';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

//import logo from '../../assets/hero.jpg';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
    return (
    
    <header className="flex-row px-1">
      <div>
            <h2 className="flex-row px-1 center">
                <a data-testid="link" href = '/'><div className = "logo flex-row"><img src={logo} alt = 'logo'/></div></a>
                <Link to = '/'>
                <p className="motto flex-row">Intelligent philanthropy.</p>
                </Link>
            </h2>
            <nav>
              {Auth.loggedIn() ? (
                <>
                  <Link to = '/Profile'>My Charities</Link>
                  <a href = '/' onClick = {logout}>Logout</a>
                </>
              ) : (
                <>
                <Link to = '/login'>Login</Link>
                <Link to = '/signup'>Signup</Link>
                </>
              )}
            </nav>
      </div>     
    </header>
    
  );
};

export default Header;