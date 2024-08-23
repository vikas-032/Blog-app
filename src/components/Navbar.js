import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Blogging App</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create Post</Link></li>
    </ul>
  </nav>
);

export default Navbar;
