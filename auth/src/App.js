import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { login } from "./auth/auth";
import Navigator from "./core/Navigator";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import RequiredAuth from "./components/RequiredAuth"
import Login from "./pages/Login"

function App() {
  const [user, setUser] = useState(null);
  //Hacemos un comprobador con una variable booleana que sera false siempre y cuando el user sea null, al al dejar de ser null, es decir , que haya un usuario, sera true
  const authenticated = user != null;

  // con esta función le pasamos a la función del archivo auth.js el email y el password para que el setUser recoja el usuario encontrado
  const loginUser = ({ email, password }) =>
    setUser(login({ email, password }));

  const logoutUser = () => setUser(null);

  return (
    <div className='App'>
      <Router>
        {/* A navigator le estamos pasando authenticated para que sepa cuando pintar el boton de login o logoout  y la función logout para que la pueda usar */}
        <Navigator authenticated={authenticated} logoutUser={logoutUser} />
        {authenticated ? <p>{user.username}</p> : <p>No hay usuario</p>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/gallery" element ={
            <RequiredAuth authenticated= {authenticated}>
              <Gallery/>
            </RequiredAuth>
          }/>
          <Route path="/login" element={<Login loginUser={loginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
