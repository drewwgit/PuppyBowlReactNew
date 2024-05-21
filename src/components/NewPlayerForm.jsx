import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPlayerForm = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [team, setTeam] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, owner, team }),
      });
      
      if (response.ok) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating new player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} required />
      <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} required />
      <button type="submit">Create Player</button>
    </form>
  );
};

export default NewPlayerForm;