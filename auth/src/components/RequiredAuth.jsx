import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children, authenticated }) {
  //Aqui almacenamos en una variable la ultima localización donde estabamos

  // gracias a conocer la ultima localizacion del usuario, si intentamos por ejemplo ir a una pagina que tenemos protegida nos llevara al login para dejarnos pasar
  let location = useLocation();

  // si autenticated es false nos va a dirigir al login para que nos autentifiquemos
  if (!authenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  //y si authenticated es true iremos a a donde queriamos ir desdel el principio
   return children
}
