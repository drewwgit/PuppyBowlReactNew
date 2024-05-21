import React from 'react';
import { useParams, useNavigate} from "react-router-dom"
import { useGetPlayerByNameQuery , deletePlayer } from "../api/index"

const SinglePlayer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: player, error, isLoading } = useGetPlayerByNameQuery(id);
  
    const handleDelete = async () => {
      try {
        const success = await deletePlayer(id);
        if (success) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error deleting player: ', error);
      }
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div>
        {player ? (
          <div key={player.id} className='player-details'>
            <h2>Player: {player.name}</h2>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
            <button onClick={handleDelete}>Delete Player</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default SinglePlayer;