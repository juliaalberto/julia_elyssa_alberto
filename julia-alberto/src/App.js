import * as React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Home from './pages/Home/home';
import About from './pages/About/about';

function App() {
  return (
    <div className="App">
      <header>
        <Router>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
      <Routes>
        
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/> 
      
      </Routes>
      </Router>
      </header>

    </div>
  );
}

export default App;
