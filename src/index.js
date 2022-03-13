import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import "dotenv/config"
// import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';
export const REACT_APP_SOME_API_KEY = process.env.REACT_APP_SOME_API_KEY ;


const engine = new Styletron({
      hydrate: document.getElementsByClassName("_styletron_hydrate_")
     });
ReactDOM.render(
    <StyletronProvider value={engine}>
    <App/>
  </StyletronProvider>
 , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
