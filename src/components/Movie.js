import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deleteMovieHandler = async (id) =>{
    console.log(id)
    try{
      const response = await fetch(`https://movielist-1f660-default-rtdb.firebaseio.com/movieList.json/${id}`,
      {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
        }
      }
      )
      if(!response.ok){
        throw new Error("Failed to delete the movie")
      }
    }
    catch (error){
      console.error('Error:',error)
    }
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => deleteMovieHandler(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
