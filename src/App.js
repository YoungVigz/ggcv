import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="font-display overflow-hidden">
        <Header/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
