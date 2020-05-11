import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About'; 
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Skills" component={Skills}/>
        <Route path="/Contact" component={Contact}/>
        <div className="clearfix"></div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
