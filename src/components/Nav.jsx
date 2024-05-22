import { Link } from 'react-router-dom';

function Nav(){

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/addPlayer">Add New Player</Link>
    </nav>
  );
};

export default Nav;