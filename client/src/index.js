//import react library-enables JSX
import React from 'react';
import ReactDOM from 'react-dom';
//import the styling
import './index.css';
//import the actual app
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

//this is JSX
ReactDOM.render(//two parameters. the first is 
  //what do you want to render.
  //display the app here-<App />
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //The second is where do you want to render. we want to render in the div with id root. 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
