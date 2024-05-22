function Player({data}){

// data is a deconstruction of props 
  return (
    <div className = "character">
      <h1>{data.name}</h1>
      {data.imageUrl &&<img src={data.imageUrl} alt={data.name}/>}
    </div>
  )
}

export default Player; 