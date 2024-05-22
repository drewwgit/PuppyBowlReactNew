import { useGetPlayerQuery } from "../api";
import {useParams, Link} from "react-router-dom";
import Player from "./Player";
import { useDeletePlayerMutation } from "../api";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";


function PlayerPage(){

    const params = useParams();
    const id= params.id; 
    const {isLoading, data}= useGetPlayerQuery(id); 
    const [deletePlayer] = useDeletePlayerMutation(); 

    return (
        <div>
            {isLoading? <h1>Loading....</h1>:<h1><Player data={data.data.player}/></h1>}
            {/* <FontAwesomeIcon style={{color:"red", fontSize:"60px"}} onClick={()=>deletePlayer(id)} icon={faTrash} spin/> */}
            <Link to={"/"}><button> Return to Players</button></Link>
        </div> 
    )
}

export default PlayerPage; 