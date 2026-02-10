import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const storageUser = localStorage.getItem('@CineMark:user');

        if(storageUser){
            setUser(JSON.parse(storageUser));
        }
    }, [])
    function login(username, password){
        try{
            if(username === 'admin' && password === 'admin'){
                setUser('Administrador');
                localStorage.setItem('@CineMark:user', 'Administrador');
                return true;
            }
            else if(username === 'caio' && password === '12345'){
                setUser('Caio');
                localStorage.setItem('@CineMark:user', 'Caio');
                return true;
            }
            else{
                throw new Error('Senha Incorreta');
            }
        }catch(err){
            return err.message;
        }
    }
    function logout(){
        setUser(null);
        localStorage.removeItem('@CineMark:user');
    }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}