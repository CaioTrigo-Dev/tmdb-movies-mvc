import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);

    function login(username, password){
        if(username === 'admin' && password === 'admin'){
            setUser('Administrador');
        }
        console.log(username, password);
    }
    function logout(){
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}