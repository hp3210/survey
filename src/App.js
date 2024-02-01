// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
import Home from './Home.js';
import Price from './Price.js';
import Components from './Components.js';
import Applications from './Applications.js';
import Contact from './Contact.js';
import Registration from './Registration.js'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}  >
        <Route index element={<Home />} />
        <Route path='/price' element={<Price />} />
        <Route path='/components' element={<Components />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/registration' element={<Registration />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
