import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
          <p>{blog.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
