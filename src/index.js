import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePageLayout from './layout/home-page.layout';
import Routing from './Routing/routing';
import "./assets/css/main.css";
import reportWebVitals from './reportWebVitals';
import HomePage from './layout/home.page';
import FirstPage from './layout/firstpage';
import InitialPage from './layout/initial.page';
import InitialPage1 from './layout/initial1.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
