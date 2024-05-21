import React, { useState } from 'react';
import { useGetPlayersQuery } from '../api';
import { Link, useNavigate } from 'react-router-dom';

const AllPlayers = () => {
  const { data: players, error, isLoading } = useGetPlayersQuery();
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // const filteredPlayers = players.filter((player) =>
  //   player.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handlePlayerClick = (id) => {
    navigate(`/players/${id}`);
  };

  return (
    <div className="puppy-players">
        {players.data.players.map((player) => (
            <div key={player.id} className="player-card">
                <img src={player.imageUrl} alt={player.name} />
                <div className="player-details">
                    <h2>{player.name}</h2>
                    <p>{player.breed}</p>
                    <p>{player.status}</p>
                    <button onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
                </div>
            </div>
        ))}
    </div>
  );
};

export default AllPlayers; 