import React, { useContext } from 'react'
import { SWContext } from '../context/context'

const Movies = () => {
    const { movies } = useContext(SWContext)
    // console.log(movies);
  return (
    <div>
        <h2>Movies</h2>
        {movies.map((movie)=> (
            <p key={movie._id}>{movie.name}</p>
        ))}
    </div>
  )
}

export default Movies