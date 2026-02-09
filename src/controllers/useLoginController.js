import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export function UseLoginController(){
    const { login } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin(e){
        e.preventDefault();
        try{
            if(userName && password){
                login(userName, password);
            }
            else{
                throw new Error('Deu Merda');
            }
        }catch(err){
            console.log(err.message)
        }
    }
    return{
        userName,
        setUserName,
        password,
        setPassword,
        handleLogin
    }
}
