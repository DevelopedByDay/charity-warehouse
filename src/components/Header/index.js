import React, { useState } from 'react';
// import {capitalizeFirstLetter} from '../../utils';
import logo from '../../assets/cover/giving-logo.png';
//import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../../utils/auth';
import {Nav, Modal, Tab } from 'react-bootstrap';
// import logo from '../../assets/hero.jpg';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
    
    <header className="flex-row px-1">
            <h2 className="flex-row px-1 center">
                <a data-testid="link" href = '/'><div className = "logo flex-row"><img src={logo} alt = 'logo'/></div></a>
                <p className="motto flex-row">Intelligent philanthropy.</p>
                <button className="header-button">Sign Out</button>
                <button className="header-button">Login/Sign Up!</button>
                {/* <Link onClick={() => setShowModal(true)}>Login/Sign Up</Link>
                <Link onClick={Auth.logout}>Logout</Link> */}
            </h2>
            {/* <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'> */}
        {/* tab container to do either signup or login component */}
        {/* <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> */}
    </header>
    
)
}

export default Header;