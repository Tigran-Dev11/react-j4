import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Cars from './pages/Cars';
import Contacts from './components/ContactFrom/Contacts';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/booking" component={Booking} />
          <Route path="/cars" component={Cars} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
