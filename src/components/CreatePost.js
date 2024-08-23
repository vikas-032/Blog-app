// After (using useNavigate)
import React from 'react';

import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Some logic here
    navigate('/posts');
  };

  return (
    <div>
      {/* Form elements */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
