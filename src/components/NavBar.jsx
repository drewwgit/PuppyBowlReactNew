import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  //   onSearch(e.target.value); 
  // };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-player">Add New Player</Link>
      {/* <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={handleSearchChange}
      /> */}
    </nav>
  );
};

export default NavBar;