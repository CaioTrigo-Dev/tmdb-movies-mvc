import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

export default function Private({children}){

    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    else{
        return <Navigate to="/"/>;
    }
}