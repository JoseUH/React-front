// Definir un array de usuarios 
const users = [
    {
        email: "jose@hotmail.com",
        password: "123456",
        username:"jose"
    },
    {
        email: "alejandro@hotmail.com",
        password: "123456",
        username:"alejandro"
    },
    {
        email: "rocio@hotmail.com",
        password: "123456",
        username:"rocio"
    }

]

export const login =({email, password}) => {
    const user = users.find(
        (user) => user.email ===email && user.password ===password
    );
    if (user === undefined) throw new Error();
    return user;
        
}