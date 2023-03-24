import React, { useState } from 'react'

const Login = ({loginUser}) => {

    //definimos un estado inicial de nuestro formulario
    const Initial_state = {
        email: "",
        password:""
    }
    // vamos a definir nuestra variable de estado formUSer para generar el usuario que le pasaremos a la función login
    const [FormUser, setFormUser] = useState(Initial_state);

    // con esta funcion controlaremos el poder recuperar de cada uno de los input que vamos a meter en nuestro forumulario mediante su value, y su id y setearlo en formUSer

    const handleInput =(ev) => {
        const {id, value} = ev.target;
        setFormUser({...FormUser,[id]: value})
    }
  // La función onSubmit almacenara en una variable email el valor de formUSer.email. El password en una varibale llamada password el de valor de formUser.password una vez seteados  poder pasarselo como argumentos a loginUser, la función que nos hemos traido por props 
    const onSubmit = (ev) => {
        ev.preventDefault()
        //tenemos que sacar email y password por separado porque loginUsser se espera dos argumentos, y nole gusta que le pase formUser.email y formUser.password
        const {email, password} = FormUser;
        loginUser({email,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        {/* a este input le indicamos un id que corresponde con los campos de mi objeto formUser y ademas que al cambiar con el onChange ejecuten el handlInput para ir seteando los valores de cada uno*/}
        <input type="text" id='email' value={FormUser.email} onChange={handleInput}/>

        <label htmlFor="password">Password</label>
        <input type="text" id='password' value={FormUser.password} onChange={handleInput}/>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login