import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export function UseLoginController(){
    const { login } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [stateView,  setStateView] = useState('');
    function handleLogin(e){
        e.preventDefault();
            const result = login(userName, password);
            if(result === 'Senha Incorreta'){
                setStateView(result);
            }
            else if(result === true){
                setStateView('Carregando');
            }
    }
    return{
        userName,
        setUserName,
        password,
        setPassword,
        handleLogin,
        stateView,
        setStateView
    }
}
