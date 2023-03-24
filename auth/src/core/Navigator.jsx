import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigator.scss"

const Navigator = ({ authenticated, logoutUser}) => {
  return (
    <nav>
        <ul>
            <li>
                <Link to= "/">Home</Link>
            </li>
            <li>
            <Link to= "/gallery">Gallery</Link>
            </li>
            {authenticated ?(
                <li>
                    <button onClick={logoutUser}>LogoOut</button>
                </li>
            ): (
                <li>
                    <Link to= "/login">Login</Link>
                </li>
            )}

            
        </ul>
    </nav>
  )
}

export default Navigator