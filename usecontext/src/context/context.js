import { createContext, useEffect, useState } from "react";

//creamor un contexto y lo almacenamos en una variable
export const SWContext = createContext()

const baseUrl = "https://starwars-server.vercel.app"

//Creamos el componente funcional que va a proveer a mis "children" de cierta información

export const SWContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [movies, setMovies] = useState([])
    //Ejecutamos todas las llamadas para que al ejecutar el swProvider ya tengamos la información de la api que queramos
    useEffect(() =>{
        const getCharacters = async () => {
            const charactersApi = await fetch(`${baseUrl}/characters`);
            const charactersJson = await charactersApi.json();
            setCharacters(charactersJson.data.characters)
        }
        getCharacters()
        
    },[])

    useEffect(() =>{
        const getMovies = async () => {
            const moviesApi = await fetch(`${baseUrl}/movies`);
            const moviesJson = await moviesApi.json();
            setMovies(moviesJson.data.movies)
        }
        getMovies()
        
    },[])


    // en el retorno le indicamos que nuestro SWContext de a los hijos x valores
    return (
        <SWContext.Provider value ={{ characters, movies }}>
            {children}
        </SWContext.Provider>
    )
}