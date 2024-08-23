import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Pages/Contact';
import Navbar from './Layout/Navbar/NavBar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import WhatsappIcon from './Layout/Whatsapp/WhatsappIcon';

const App = () => {
  return (
   
      <div>
        <Navbar />
        
        <Switch>
          <Route path='/' exact> <Redirect to='/home' /> </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/home">  <HomePage/>  </Route>
          <Route path="/about">  <AboutMe/> </Route>
        </Switch>

        <footer>
          <WhatsappIcon/>
        </footer>
      </div>
   
  );
}

export default App;
