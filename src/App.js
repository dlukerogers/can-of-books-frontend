import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About.js';
import Welcome from './Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={ this.props.auth0.isAuthenticated ?  <BestBooks /> : <Welcome/>}  />
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/profile' element={this.props.auth0.isAuthenticated ? < Profile /> : <h2>Please Log In</h2>}/> 
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
