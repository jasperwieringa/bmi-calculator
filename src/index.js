import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Custom CSS
import './index.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyD-_KvzmYxHAJWjBjTbl0o1sujDabHhCTc",
  authDomain: "wieringaprojects.firebaseapp.com",
  databaseURL: "https://wieringaprojects.firebaseio.com",
  projectId: "wieringaprojects",
  storageBucket: "wieringaprojects.appspot.com",
  messagingSenderId: "670614238913",
  appId: "1:670614238913:web:420dbde7fc137a83c00640",
  measurementId: "G-RXN0JQHRT9"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
