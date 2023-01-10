// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "../node_modules/jquery/dist/jquery.min.js";
import './App.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes,} from "react-router-dom";

import App from "./App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Reviews from "./components/Reviews";
import Navbar from "./components/navbar";
import ForgotPswd from "./components/ForgotPswd";

 const rootElement = ReactDOM.createRoot(document.getElementById("root"));
 rootElement.render(
   <BrowserRouter>
   <Navbar />
    <Routes>
     <Route exact path="/" element={< App/>} />
     <Route path="/SignIn" element={< SignIn />} />
     <Route path="/ForgotPswd" element={< ForgotPswd />} />
     <Route path="/SignUp" element={< SignUp />} />
     <Route path="/Reviews" element={< Reviews />} />
   </Routes>
   </BrowserRouter>
 ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
