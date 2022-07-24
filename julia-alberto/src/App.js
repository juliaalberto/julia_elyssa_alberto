import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <Router>
    <div className="App">

      <ul className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
          </ul>

        <Routes>
          
          <Route exact path = "/" element={<Home/>}></Route>
          <Route exact path = "/about" element={<About/>}></Route> 
        
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
