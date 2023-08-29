import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<BestBooks />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path='/about' element={<About />}></Route>
            {this.props.auth0.isAuthenticated ? <Route exact path='/profile' element={<Profile />}></Route> : <h2>Please Log In</h2>}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
