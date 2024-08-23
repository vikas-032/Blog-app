import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import CreatePost from './components/CreatePost';
import CreatePost from './components/CreatePost';

function App() {
  return (
     <Router>
      <Navbar />
      <CreatePost />
        <Route path="/" exact components={Home} />
        <Route path="/blogs/:id" components={Blog} />
        <Route path="/Create" components={CreatePost} />

      </Router>

  );
}

export default App;
