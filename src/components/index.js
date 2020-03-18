import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Error from './Error/Error';

class App extends Component {
    render() {
        return (
          <>
            <Router>
              <Header />
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={1500} classNames="fade">
                    <Switch location={location}>
                      <Route path="/" component={Home} exact></Route>
                      <Route path="/about" component={About}></Route>
                      <Route path="/projects" component={Project}></Route>
                      <Route path="/contact" component={Contact}></Route>
                      <Route path="*" component={Error}></Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}/>
            </Router>
            <Footer />
          </>
        )
    }
}

export default App;

