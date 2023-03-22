import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const charactersAPI = await axios.get(
        "https://starwars-server.vercel.app/characters"
      );
      setCharacters(charactersAPI.data.data.characters);
    };
    getCharacter();
  }, []);

  return (
    <div>
      {characters.length ? (
        <>
          {characters.map((character) => (
            <p key={character._id}>{character.name}</p>
          ))}
        </>
      ) : (
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt=""/>
      )}
    </div>
  );
};

export default Characters;
