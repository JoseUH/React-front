import React, { useContext } from 'react'
import { SWContext } from '../context/context'

const Characters = () => {
    const { characters } = useContext(SWContext)
    // console.log(characters);
  return (
    <div>
    <h2>Characters</h2>
    {characters.map((character)=>(
        <div>
            <p key={character._id}>{character.name}</p>
        </div>
    ))}
    </div>
  )
}

export default Characters