import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Nav/>
     <Banner/>
     <Footer/>
    <App />
  </React.StrictMode>
);


