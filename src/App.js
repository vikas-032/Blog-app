import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blogs/:id" component={Blog} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default App;
