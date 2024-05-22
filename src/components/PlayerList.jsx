import Player from "./Player";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function PlayerList() {


  const players = useSelector(state=>state.players);

  return (
    <>
      <div id="characterWrapper">
        {
          players.map(i=>
            <Link key={i.id} to={"/players/"+i.id}><Player data={i}/></Link>
          )
        }

      </div>
    </>
  )
}

export default PlayerList; 