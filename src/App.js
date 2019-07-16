import React, { Component } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <header><Header/></header>
        <main>
          <section className="projects"><Projects/></section>
          <section className="contact"><Contact/></section>
        </main>
        <footer><Footer/></footer>
      </div>
    );
  }
}

export default App;
